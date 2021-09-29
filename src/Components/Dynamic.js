import React, { Component } from "react";
import { Button } from "react-bootstrap";
import LoadingComponent from "./LoadingComponent";
export default class Dynamic extends Component {
  state = {
    data: [],
    per: 10,
    page: 1,
    total_pages: null,
    showLoadingComp: false,
  };

  componentDidMount() {
    this.loadData();
    this.setState({ showLoadingComp: true });
  }

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results,
          showLoadingComp: false,
        });
      });
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
        scrolling: true,
      }),
      this.loadData
    );
  };

  render() {
    return (
      <body class="bg-light">
        <main>
          {this.state.showLoadingComp && (
            <LoadingComponent isLoading={this.state.showLoadingComp} />
          )}
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
                {this.state.data.map((data) => (
                  <div class="col-lg-3 col-md-6 mb-4 pt-5">
                    <div class="card shadow-sm border-0">
                      <div class="card-body">
                        <div class="user-picture">
                          <img
                            src={data.picture.large}
                            class="shadow-sm rounded-circle"
                            height="130"
                            width="130"
                          />
                        </div>
                        <br />
                        <div class="user-content">
                          <h5 class="text-capitalize user-name">
                            {data.name.first} {data.name.last}
                          </h5>
                          <p>
                            {data.location.city + ", " + data.location.state}
                          </p>
                          <br />
                          <p style={{ float: "right" }}>
                            {data.phone}
                            <br />
                            {data.email}
                          </p>
                          <br />

                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="button">
            <Button
              variant="info"
              onClick={(e) => {
                this.loadMore();
              }}
            >
              Load More..
            </Button>{" "}
          </div>
        </main>
      </body>
    );
  }
}
