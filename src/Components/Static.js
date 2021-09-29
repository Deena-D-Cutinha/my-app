import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPaperPlane,
  faComment,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
export default class Static extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  componentDidMount() {}

  handleClick(id) {
    this.setState({ liked: !this.state.liked });
    if (this.state.liked === true) {
      document.getElementById(id).style.color = "red";
    } else document.getElementById(id).style.color = "#ff9e80";
  }
  render() {
    const numbers = [1, 2, 3, 4, 5];

    return (
      <div>
        <body class="bg-light">
          <main>
            <section id="cards">
              <div class="container-fluid">
                <div class="row pb-4">
                  <div class="col-12 text-center">
                    <div class="display-3">
                      {" "}
                      <p>Our Team</p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  {numbers.map((item) => (
                    <div class="col-lg-3 col-md-6 mb-4 pt-5">
                      <div class="card shadow-sm border-0">
                        <div class="card-body">
                          <div class="user-picture">
                            <img
                              src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                              class="shadow-sm rounded-circle"
                              height="130"
                              width="130"
                            />
                            <FontAwesomeIcon
                              style={{
                                "font-size": "1.5em",
                                color: "#ff9e80",

                                float: "right",
                              }}
                              id="1"
                              icon={faHeart}
                              onClick={this.handleClick.bind(this, 1)}
                            />
                          </div>
                          <br />
                          <div class="user-content">
                            <h5 class="text-capitalize user-name">
                              Carry Johnshon
                            </h5>
                            <p class="small text-muted mb-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Amet nemo harum repellendus aut itaque.
                              Temporibus quaerat dolores ut, cupiditate
                              molestiae commodi! Distinctio praesentium, debitis
                              aut minima doloribus earum quia commodi.
                            </p>
                            <br />
                            <p
                              style={{ float: "right" }}
                              class=" text-capitalize text-muted small blockquote-footer"
                            >
                              Awarded by - Rakesh sharma
                            </p>
                            <br />
                            <div style={{ "font-size": "small" }}>
                              <FontAwesomeIcon
                                icon={faHeart}
                                style={{
                                  "font-size": "1.5em",
                                  color: "red",
                                }}
                              />
                              10
                              <FontAwesomeIcon
                                icon={faComment}
                                style={{
                                  "font-size": "1.5em",
                                  color: "#0F69AF",
                                }}
                              />
                              23
                              <FontAwesomeIcon
                                icon={faTrophy}
                                style={{
                                  "font-size": "1.5em",
                                  color: "#FFC832",
                                }}
                              />
                              Team Impact
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </body>
      </div>
    );
  }
}
