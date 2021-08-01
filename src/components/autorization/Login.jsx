import React from "react";
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import { red } from '@ant-design/colors';
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import classNames from "classnames";
import "./style.css";
import Logo from "../logo/Logo";

// const style = classNames("col-12", "col-offset-6");

export default function Login() {
  return (
    <div className="login">
      <Logo />
      <div className="form">
        <Avatar shape="square" size={64} icon={<UserOutlined />} />

        <h1>Sign In</h1>
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
              <label htmlFor="userName" className="title">
                User Name
              </label>
              <Field
                id="userName"
                className="input"
                name="userName"
                placeholder="Jane"
              />
              <div className="myError">
                <ErrorMessage name="userName" className="myError" />
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="password" className="title">
                Password
              </label>
              <Field
                id="password"
                name="password"
                placeholder="jane@acme.com"
                type="password"
                className="input"
              />
              <div className="myError">
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
    </div>
  );
}
