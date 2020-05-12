import React from "react";
import "../../index.css";
import "./GamesListItem.css";

function GamesListItem({ title, icon }) {
  console.log(icon);

  return (
    <section className="gameListItem">
      <img src={icon} className="gameIcon" />
      <span> {title}</span>
    </section>
  );
}

export default GamesListItem;
