import React from "react";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { getImgUrl } from "../../service/filmsData";

const { Meta } = Card;

export default function FilmCard({ films }) {
  return (
    <Row
      justify="space-around"
      style={{ width: "80%", margin: "auto" }}
      align="middle"
    >
      {films.map(({ poster_path, title, release_date, id }) => {
        return (
          <Link to={`/film/${id}`}>
            <Col flex="240px">
              <Card
                hoverable
                tabList
                style={{ width: 240, height: 450, margin: 20 }}
                cover={<img alt={title} src={getImgUrl(poster_path)} />}
              >
                <Meta
                  title={title}
                  description={release_date}
                  avatar={
                    <PlusCircleOutlined
                      style={{ fontSize: 40, color: "green" }}
                    />
                  }
                />
              </Card>
            </Col>
          </Link>
        );
      })}
    </Row>
  );
}
