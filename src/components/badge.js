import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/badge.css";

class Badge extends React.Component {
  // Todos los componentes deben de llevar el render()
  render() {
    // Propiedades que se le pasan al componente
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;

    return (
      <section className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo"></img>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatarUrl} alt="User Avatar" />
          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>{jobTitle}</p>
          <p>@{twitter}</p>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </section>
    );
  }
}

export default Badge;
