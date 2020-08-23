import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import BadgesList from "../components/badgesList";
// STYLES
import "./styles/badges.css";
// ASSETS
import header from "../images/badge-header.svg";
// API
import api from "../api";

export default class Badges extends Component {
  constructor(props) {
    super(props);
    // console.log("1. constructor()");
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    // console.log("3. componentDidMount()");
    // this.timeout = setTimeout(() => {
    //   this.setState({
    //     loading: false,
    //     data: [],
    //   });
    // }, 3000);
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("5. componentDidUpdate()");
    // console.log({
    //   prevProps: prevProps,
    //   prevState: prevState,
    // });
    // console.log({
    //   props: this.props,
    //   state: this.state,
    // });
  }

  componentWillUnmount() {
    // console.log("6. componentWillUnmount()");
    clearTimeout(this.timeout);
  }

  render() {
    // console.log("2/4. render()");
    // if (this.state.loading === true) {
    //   return "Loading...";
    // }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={header} alt="header" className="Badges_conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList loading={this.state.loading} badges={this.state.data} />
          </div>
        </div>
      </Fragment>
    );
  }
}
