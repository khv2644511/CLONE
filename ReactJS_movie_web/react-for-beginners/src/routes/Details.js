import React from "react";
import { useEffect } from "react";
import { json, useParams } from "react-router-dom";

export default function Details() {
  const { pagedetailId } = useParams();
  //   const x = useParams();
  console.log(pagedetailId);
  //   console.log(x);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${pagedetailId}`
      )
    ).json();
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
