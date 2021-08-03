import { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import FilmCard from "../card/FilmCard";
import {
  getAllMovies,
  getMovieByQuery,
  getImgUrl,
} from "../../service/filmsData";

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    search
      ? getMovieByQuery(search).then(({ results }) => {
          // const filmsData = results.map((res) => {
          //   Object.assign({ img: getImgUrl(res.poster_path), }, res);
          // });
          
          setFilms(results);
        })
      : getAllMovies().then(({ results }) => {
          // const filmsData = results.map((res) => {
          //   Object.assign({ img: getImgUrl(res.poster_path), }, res);
          // });
          setFilms(results);
        });
  }, [search]);

  return (
    <>
      <NavBar onChange={setSearch} />
      <FilmCard films={films} />
    </>
  );
}
