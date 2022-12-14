import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ImageCard from '../../../components/ImageCard';
import StarRate from '../../../components/StarRate';

function Movie({ movie, rank }) {
  const { pathname } = useLocation();
  return (
    <Container to={`/movie/${movie.id}`}>
      <ThumbItem>
        <ImageWrapper>
          <ImageCard
            src={process.env.REACT_APP_IMAGE_URL + movie.poster_path}
            alt={movie.id}
            width={204}
          ></ImageCard>
        </ImageWrapper>
        <BackInfoWrapper>
          <p>{movie.overview}</p>
        </BackInfoWrapper>
      </ThumbItem>
      <ThumbContent>
        <strong>{movie.title}</strong>
        <span className="content_popularity">
          <StarRate vote_average={movie.vote_average} width={'25'} />
          <span className="vote_score">{movie.vote_average}</span>
        </span>
        <span className="content_date">개봉 {movie.release_date}</span>
      </ThumbContent>
      {pathname === '/movie/top_rated' ? <RankNumber>{rank}</RankNumber> : ''}
    </Container>
  );
}

const Container = styled(Link)`
  width: 204px;
  position: relative;
  @keyframes rotateImage {
    0% {
      transform: rotate(0) translateY(0) scale(1);
    }
    10% {
      transform: rotate(0) translateY(0) scale(1);
    }
    33% {
      transform: rotate(-1deg) translateY(-2%) scale(1.03);
    }
    66% {
      transform: rotate(1deg) translateY(-2%) scale(1.03);
    }
    90% {
      transform: rotate(0) translateY(0) scale(1);
    }
    100% {
      transform: rotate(0) translateY(0) scale(1);
    }
  }
  &:hover {
    animation: rotateImage 1s linear infinite;
  }
  transition: opacity 0.1s linear;
`;

const ThumbItem = styled.div`
  width: 100%;
  height: 298px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 15, 15, 0.6);
  transition: all 0.2s ease-out 0.3s;
  opacity: 0;
  &:hover {
    opacity: 1;
  }

  p {
    padding: 29px 24px 0;
    width: 204px;
    max-height: 200px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;

    color: ${({ theme }) => theme.WHITE_1};
    font-size: 15px;
    line-height: 1.4;
  }
`;

const ThumbContent = styled.div`
  padding: 17px 8px 0;
  strong {
    display: block;
    width: 204px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
  }

  span.content_popularity,
  span.content_date {
    display: block;
    font-size: small;
  }

  span.content_popularity {
    padding-top: 7px;
    display: flex;
    align-items: center;
    column-gap: 0.5em;
    span {
      margin-right: 2px;
    }
    span.vote_score {
      font-size: 20px;
      font-weight: 600;
    }
  }

  span.content_date {
    padding-top: 3px;
    color: ${({ theme }) => theme.GRAY_1};
  }

  span.content_star {
    color: ${({ theme }) => theme.RED};
  }
`;

const RankNumber = styled.span`
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 13px;
  font-size: 32px;
  color: ${({ theme }) => theme.WHITE_1};
  text-shadow: 0 0 2px rgb(0 0 0 / 20%);
`;

export default Movie;
