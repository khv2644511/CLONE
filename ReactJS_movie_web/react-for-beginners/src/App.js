import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // async await을 사용하기 위해 함수를 만듦
  const getMovies = async () => {
    const response = await fetch(
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=199ff03db6855d0ed5343e92968fef7e&targetDt=20120101"
    );
    const json = await response.json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    console.log(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  // fetch 사용 시
  // useEffect(() => {
  //   fetch(
  //     "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=199ff03db6855d0ed5343e92968fef7e&targetDt=20120101"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.boxOfficeResult.dailyBoxOfficeList));
  //   setLoading(false);
  // }, []);
  console.log(movies);

  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;

// http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=199ff03db6855d0ed5343e92968fef7e&targetDt=20120101
