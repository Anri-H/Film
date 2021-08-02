import React from "react";
import { Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import "./login.less";
import Logo from "../logo/Logo";

const inputStyle = classNames("white", "input");
const errMessage = classNames("red", "left-text");
const inputTitle = classNames("green", "left-text");

export default function Login() {
  return (
    <Row align="middle">
      <Col flex={3}>
        <Logo />
      </Col>
      <Col flex={2}>
        <div className="form">
          <Avatar
            style={{
              color: "#52c41a",
              backgroundColor: "rgba(255, 255, 255, 0)",
            }}
            size={64}
            icon={<UserOutlined />}
          />

          <h1 className="green">Sign In</h1>
          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            validationSchema={Yup.object({
              userName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              password: Yup.string()
                .min(8, "Must be 8 characters or more")
                .required("Required"),
            })}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <div className="form-item">
                <label htmlFor="userName" className={inputTitle}>
                  User Name
                </label>
                <Field id="userName" className={inputStyle} name="userName" />
                <div className={errMessage}>
                  <ErrorMessage name="userName" />
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="password" className={inputTitle}>
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className={inputStyle}
                />
                <div className={errMessage}>
                  {" "}
                  <ErrorMessage name="password" />
                </div>
              </div>

              <button type="submit" className="button">
                Sign In
              </button>
            </Form>
          </Formik>
        </div>
      </Col>
    </Row>
  );
}
