import React from "react";
import styled from "styled-components";

import { getReposPromise } from "./api";

const GreenBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: mediumseagreen;
`;

class Page extends React.Component {
  state = {
    repos: null
  };

  componentDidMount() {
    getReposPromise()
      .then(res => res)
      .then(data => this.setState({ repos: data }));
  }

  render() {
    const { repos } = this.state;

    if (repos == null) {
      return "loading repos...";
    }

    return (
      <>
        <GreenBox />
        {repos.map(r => {
          console.log(r.name);
          return <p>{r.name}</p>;
        })}
      </>
    );
  }
}

export default Page;
