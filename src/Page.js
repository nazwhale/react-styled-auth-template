import React from "react";
import { Button } from "./components";

import { getReposPromise } from "./api";

class Page extends React.Component {
  state = {
    repos: null
  };

  componentDidMount() {
    getReposPromise()
      .then(res => res)
      .then(data => this.setState({ repos: data }));
  }

  handleClick = () => {
    console.log("💥");
  };

  render() {
    const { repos } = this.state;

    if (repos == null) {
      return "loading repos...";
    }

    return (
      <>
        <Button onClick={this.handleClick}>press me</Button>
        {repos.map(r => {
          return <p key={r.id}>{r.name}</p>;
        })}
      </>
    );
  }
}

export default Page;
