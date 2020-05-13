import React from "react";
import "../../../index.css";
import "./gameList.css";
import GameListItem from "./gameListItem";
import PropTypes from "prop-types";

GamesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
    componentPath: PropTypes.string,
    alt: PropTypes.string,
    startPageTitle: PropTypes.string,
  })),
  onClick: PropTypes.func
};

function GamesList({ data , onClick }) {

  //loops over the available games and create list items for them
  return (
    <section className="gameListContainer">
      {data && data.map((data,index) => {
         const {title, icon, componentPath, alt, startPageTitle} = data
         return < GameListItem
                      key = {`game_${index}`}
                      title = {title}
                      icon = {icon}
                      alt = {alt}
                      onClick = {() => onClick && onClick(data)}/>
        })}
    </section>
  );
}

export default GamesList;
