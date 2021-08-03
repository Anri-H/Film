import { Card, Col, Row } from "antd";
import {  getImgUrl } from "../../service/filmsData";

const { Meta } = Card;

export default function FilmCard({films}) {
  
  return (
    <Row justify="space-around" align="middle">
      {films.map(({ poster_path, title, release_date }) => {
        return (
          <Col flex="240px" >
            <Card
              hoverable
              tabList
              style={{ width: 240, height: 450,  margin:20 }}
              cover={<img alt={title} src={getImgUrl(poster_path)} />}
            >
              <Meta title={title} description={release_date} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
