import React from "react";
import "../../../index.css";
import "./gameList.css";
import GameListItem from "./GameListItem";

// const game = [
//   {
//     title: "COD",
//     icon: "https://i.imgur.com/GmbYauk.jpg ",
//   },
//   {
//     title: "COD2",
//     icon: "https://i.imgur.com/GmbYauk.jpg ",
//   },
//   {
//     title: "COD3",
//     icon: "https://i.imgur.com/GmbYauk.jpg ",
//   },
//   {
//     title: "COD",
//     icon: "https://i.imgur.com/GmbYauk.jpg ",
//   },
//   {
//     title: "COD2",
//     icon: "https://i.imgur.com/GmbYauk.jpg ",
//   },
//   {
//     title: "COD3",
//     icon: "https://i.imgur.com/GmbYauk.jpg ",
//   },
// ];

function GamesList({ data }) {
  return (
    <section className="gameListContainer">
      {data &&
        data.map((game) => (
          <GameListItem title={game.title} icon={game.icon} />
        ))}
    </section>
  );
}

export default GamesList;
