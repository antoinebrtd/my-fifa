import React, { Component } from "react";

class Rankings extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:8000/fetch/players", {
      method: "GET"
    })
      .then(players => console.log(JSON.parse(players)))
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
  }
  render() {
    return <h1>Classements</h1>;
  }
}

export default Rankings;
