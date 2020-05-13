import React from "react";
import "../../../index.css";
import "./GamesListItem.css";

function GamesListItem({ title, icon, tag , onClick }) {
  return (
    <section className="gameListItem" onClick={() => onClick && onClick()}>
      <img src={icon} alt={tag} className="gameIcon"  />
      <span> {title}</span>
    </section>
  );
}

export default GamesListItem;
