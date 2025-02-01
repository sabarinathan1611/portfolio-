import React from "react";
import "../styles/playerStatus.css";

const PlayerStatus = () => {
  return (
    <div id="playerStatus">
      <h1> SABARINATHAN LEVEL 22</h1>
      <div id="playerStatus_lines">
        <span id="player_lines_thick"></span>
        <span id="player_lines_thin"></span>
      </div>
      <h2>Fullstack Developer</h2>
    </div>
  );
};

export default PlayerStatus;
