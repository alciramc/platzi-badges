import React, { Component } from "react";
import "./styles/badgesList.css";
import Skeleton from "react-loading-skeleton";

class BadgesListItem extends Component {
  badge = this.props.badge;
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.badge.avatarUrl}
          alt=""
        />
        <div>
          <strong>
            {this.badge.firstName} {this.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.badge.jobTitle}
        </div>
      </div>
    );
  }
}

export default class BadgesList extends Component {
  render() {
    if (this.props.loading === true) {
      return (
        <div className="BadgesList">
          <ul className="list-unstyled">
            {new Array(10).fill(1).map((_, i) => {
              return (
                <li key={i}>
                  <div className="BadgesListItem">
                    <Skeleton circle={true} />
                    <div>
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    if (this.props.badges.length === 0) {
      return <div className="alert-warning">No se encontraron resultados.</div>;
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
