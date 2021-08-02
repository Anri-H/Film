import { LikeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Col, Menu, Row, Input } from "antd";
import Logo from "../logo/Logo";
import "./navbar.less";

const onSearch = ({ target }) => {
  console.log(target.value);
};

export default function NavBar() {
  return (
    <Menu style={{ padding: "20px", backgroundColor: "#333" }}>
      <Row key="1" justify="space-between" align="middle">
        <Col flex="300px" key="1">
          <Logo />
        </Col>
        <Col flex="auto" key="1">
          <Input placeholder="Search" onChange={onSearch} />
        </Col>
        <Col flex="100px" key="2">
          <LikeOutlined className="icon" />
        </Col>
        <Col flex="100px" key="3">
          <LogoutOutlined className="icon" />
        </Col>
      </Row>
    </Menu>
  );
}
