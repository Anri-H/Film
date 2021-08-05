import React from "react";
import {  useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getImgUrl } from "../../service/filmsData";
import { Descriptions } from "antd";
import DescriptionsItem from "antd/lib/descriptions/Item";

export default function Film() {
  let { id } = useParams();
  const [film, setFilm] = useState();

  getMovieById(id)
    .then((data) => {
      setFilm(data)
    })
    .catch((err) => console.log(err));

  return (
      <Descriptions
    title="film"
    bordered
    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
  >
    <DescriptionsItem label="Product">{film.title}</DescriptionsItem>
    </Descriptions >
  );
}
