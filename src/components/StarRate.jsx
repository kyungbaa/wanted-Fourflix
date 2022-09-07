import { useState, useEffect } from 'react';

function StarRate({ vote_average, width }) {
  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);
  const calcStarRates = () => {
    let tempStarRatesArr = [0, 0, 0, 0, 0];
    let starVerScore = (vote_average * 70) / 10;
    let idx = 0;
    while (starVerScore > 14) {
      tempStarRatesArr[idx] = 14;
      idx += 1;
      starVerScore -= 14;
    }
    tempStarRatesArr[idx] = starVerScore;
    return tempStarRatesArr;
  };

  useEffect(() => {
    setRatesResArr(calcStarRates);
  }, []);

  return (
    <>
      {ratesResArr.map((item, idx) => {
        return (
          <span className="star_icon" key={`${idx}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={width}
              height="40"
              viewBox="0 0 14 13"
              fill="#cacaca"
            >
              <clipPath id={`${item}StarClip`}>
                <rect width={`${ratesResArr[idx]}`} height="39" />
              </clipPath>
              <path
                id={`${item}Star`}
                d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                transform="translate(-2 -2)"
              />
              <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill="#E60813" />
            </svg>
          </span>
        );
      })}
    </>
  );
}

export default StarRate;
