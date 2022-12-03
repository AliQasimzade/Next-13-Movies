import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegEye, FaStar } from "react-icons/fa";
import styles from "./styles.module.css";

async function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
async function MoviesSection({ title, movies }) {
  await delay(2000);
  console.log(movies);

  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <div className={styles.movieInfo}>
              <h4>{movie.original_title}</h4>
              <div>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "5px" }}>
                    {" "}
                    <FaStar />
                  </span>
                  <span>
                    {movie.vote_average}/
                    <span style={{ marginLeft: "1px" }}>10</span>
                  </span>
                </p>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "5px" }}>
                    <FaRegEye />
                  </span>{" "}
                  <span>{movie.popularity}</span>
                </p>
                <p>
                  <span style={{fontSize:'14px'}}>
                    {new Date(movie.release_date).toLocaleDateString("en-GB", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </p>
              </div>
            </div>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export { MoviesSectionLoading } from "./loading";
export { MoviesSection };
