import React from "react";
import Movie from "../components/Movie";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // async await을 사용하기 위해 함수를 만듦
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}
