import { notFound } from "next/navigation";
import React from "react";
import { MovieContainer } from "@/containers/movie";

import Movies from "@/mocks/movies.json";


async function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}
 async function MoviePage({ params, searchParams }) {
  
  await delay(3000)
  const movieDetail = Movies.results.find(movie => `${movie.id}` === params.id)
 
  if (movieDetail.success === false) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
    
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
