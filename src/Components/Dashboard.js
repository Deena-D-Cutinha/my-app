import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="center">
        {window.localStorage.userName && window.localStorage.inputMsg && (
          <h6>
            {" "}
            hello .. {window.localStorage.userName} &nbsp; One thing that makes
            you smile is {window.localStorage.inputMsg}
          </h6>
        )}

        {!(window.localStorage.userName || window.localStorage.inputMsg) && (
          <h4> local Storage is not set</h4>
        )}
      </div>
    );
  }
}
