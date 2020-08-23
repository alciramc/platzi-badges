import React, { Component, Fragment } from "react";

import Badge from "../components/badge";
import BadgeForm from "../components/badgeForm";

import header from "../images/badge-header.svg";
import "./styles/badgeNew.css";

export default class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    // console.log({ name: e.target.name, value: e.target.value });
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="header" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
