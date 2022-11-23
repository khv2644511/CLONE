import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Details />}></Route>
      </Routes>
    </Router>
  );
}
// fetch 사용 시
// useEffect(() => {
//   fetch(
//     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
//   )
//     .then((response) => response.json())
//     .then((json) => setMovies(json.data.movies));
//   setLoading(false);
// }, []);
// console.log(movies);
