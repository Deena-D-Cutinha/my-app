import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmile } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      inputMsg: "",
      userName: "",
      nameFlag: true,
      msgFlag: false,
      showAllFlag: false,
    };
  }

  handleCommentChange(key, value) {
    console.log("sent values---" + key);
    if (key === "name") {
      this.setState({ userName: value });
      window.localStorage.setItem("userName", value.target.value);
      console.log(
        "local storage is set for name---" + window.localStorage.name
      );
    }
    if (key === "message") {
      window.localStorage.setItem("inputMsg", value.target.value);
      console.log("local storage is set for msg---" + window.localStorage.name);
      this.setState({ inputMsg: value });
    }
  }
  submit() {
    console.log("local storage in submit---" + window.localStorage.name);
    console.log("user name--" + this.state.userName);
    if (this.state.userName === "") {
      alert("plese enter your name");
    } else {
      console.log("submit called--" + this.state.userName.target.value);
      this.setState({
        nameFlag: false,
        msgFlag: true,
        userName: this.state.userName.target.value,
      });
    }
  }

  submitMsg() {
    if (this.state.inputMsg === "") {
      alert("plese enter your message");
    } else {
      this.setState({
        nameFlag: false,
        msgFlag: false,
        showAllFlag: true,

        inputMsg: this.state.inputMsg.target.value,
      });
    }
  }
  render() {
    return (
      <div>
        <body>
          <div id="progress"></div>

          <div class="center">
            <div id="register">
              {this.state.nameFlag && (
                <div id="inputContainer">
                  <input
                    type="text"
                    style={{ float: "left" }}
                    placeholder="What's your name?.."
                    onChange={this.handleCommentChange.bind(this, "name")}
                  />
                  <br />
                  <button
                    style={{
                      float: "left",
                      "border-radius": "20px",
                      "background-color": "#503291",
                      color: "white",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      onClick={this.submit.bind(this)}
                    />
                  </button>
                </div>
              )}
              {this.state.msgFlag && (
                <div id="inputContainer">
                  <h5> Welcome. ! {this.state.userName}</h5>
                  <input
                    type="text"
                    style={{ float: "left" }}
                    placeholder="What makes you smile? .."
                    onChange={this.handleCommentChange.bind(this, "message")}
                  />
                  <br />
                  <button
                    style={{
                      float: "left",
                      "border-radius": "20px",
                      "background-color": "#503291",
                      color: "white",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      onClick={this.submitMsg.bind(this)}
                    />
                  </button>
                </div>
              )}
              {this.state.showAllFlag && (
                <div>
                  <p>
                    Hello , {this.state.userName} <br />
                    <br />
                    It was nice to know that {this.state.inputMsg} makes you
                    smile.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="reload">
            <Button
              variant="info"
              onClick={(e) => {
                this.loadMore();
              }}
            >
              Reload..
            </Button>{" "}
          </div>
          <br />
        </body>
      </div>
    );
  }
}
