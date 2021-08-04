import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import FilmCard from "../card/FilmCard";
import {
  getAllMovies,
  getMovieByQuery,
  getImgUrl,
} from "../../service/filmsData";
import Film from "../film/Film";

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    search
      ? getMovieByQuery(search)
          .then(({ results }) => {
            // const filmsData = results.map((res) => {
            //   Object.assign({ img: getImgUrl(res.poster_path), }, res);
            // });

            setFilms(results);
          })
          .catch((err) => {
            console.log(err);
          })
      : getAllMovies()
          .then(({ results }) => {
            // const filmsData = results.map((res) => {
            //   Object.assign({ img: getImgUrl(res.poster_path), }, res);
            // });
            console.log(results);
            setFilms(results);
          })
          .catch((err) => {
            console.log(err);
          });
  }, [search]);

  return (
    <>
      <NavBar onChange={setSearch} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <FilmCard films={films} />
          </Route>

          <Route path="/film/:id" exact>
            <Film />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
