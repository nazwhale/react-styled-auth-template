import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import AuthService from "./AuthService";

const Auth = new AuthService();

const Container = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const FormLabel = styled.label`
  margin: 5px;
`;

const FormSubmit = styled.input`
  margin: 5px;
`;

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    if (Auth.loggedIn()) this.props.history.replace("/");
  }

  handleInputChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await Auth.login(email, password);
    } catch(err) {
      alert(err)
    }
  }

  render() {
    return (
      <Container>
        <h1>Log in</h1>

        <Form onSubmit={this.handleSubmit}>
          <FormLabel>
            Email{" "}
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Password{" "}
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </FormLabel>
          <FormSubmit type="submit" value="Submit" />
        </Form>

        <Link to="/" style={{ textDecoration: "none" }}>
          <p>I'm new here</p>
        </Link>
      </Container>
    );
  }
}
