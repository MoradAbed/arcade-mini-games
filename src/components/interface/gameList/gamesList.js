import React from "react";
import "../../../index.css";
import "./gameList.css";
import GameListItem from "./gameListItem";


function GamesList({ data , onClick }) {

  //loops over the available games and create list items for them
  return (
    <section className="gameListContainer">
      {data &&
        data.map(({title,icon,componentPath}) => (
          <GameListItem
            title={title}
            icon={icon}
            onClick={()=>onClick && onClick(componentPath)}
          />
        ))}
    </section>
  );
}

export default GamesList;
