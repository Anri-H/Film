import { LikeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Col, Menu, Row, Input } from "antd";
import Logo from "../logo/Logo";
import "./navbar.less";



export default function NavBar({onChange}) {
  const onSearch = ({ target }) => {
  onChange(target.value);
};
  return (
    <Menu style={{ padding: "10px", backgroundColor: "#333" }}>
      <Row  justify="space-around" align="middle">
        <Col flex="250px" style={{ margin:"30px 0"}} >
          <Logo />
        </Col>
        <Col flex="300px" >
          <Input placeholder="Search" onChange={onSearch} />
        </Col>
        <Col flex="150px">
          <LikeOutlined className="icon" />    
          <LogoutOutlined className="icon" />
        </Col>
      </Row>
    </Menu>
  );
}
