import React from "react";
import "../../../index.css";
import "./gameList.css";
import GameListItem from "./GameListItem";


function GamesList({ data , onClick }) {
  return (
    <section className="gameListContainer">
      {data &&
        data.map((game) => (
          <GameListItem
            title={game.title}
            icon={game.icon}
            onClick={()=>onClick && onClick(game.tagPath)}
            
          />
        ))}
    </section>
  );
}

export default GamesList;
