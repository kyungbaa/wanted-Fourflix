import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'ko',
  },
});

export const movieApi = {
  nowPlaying: page => api.get('movie/now_playing', { params: { page: page } }),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: movie_id => api.get(`movie/${movie_id}`),
  search: term =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term), // 특수문자나 스페이스 등을 인코딩 하는 과정
      },
    }),
};
