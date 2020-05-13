import React from "react";
import "../../../index.css";
import "./gamesListItem.css";
import PropTypes from 'prop-types';

GamesListItem.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};


function GamesListItem({ title, icon , onClick,alt }) {
  return (
    <section className="gameListItem" onClick={() => onClick && onClick()}>
      <img src={icon} alt={alt} className="gameIcon"  />
      <span> {title}</span>
    </section>
  );
}

export default GamesListItem;
