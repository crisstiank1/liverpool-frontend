import React from "react";
import "../styles/PlayerCard.css";

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <div className="player-number">#{player.jersey_number}</div>

      <div className="player-photo">
        <img
          src={player.photo_url || "/default-player.png"}
          alt={player.name}
          onError={(e) => (e.target.src = "/default-player.png")}
        />
      </div>

      <div className="player-info">
        <h3>{player.name}</h3>
        <p className="position">{player.position}</p>
        <div className="player-details">
          <span>🌍 {player.nationality}</span>
          <span>🎂 {player.age} años</span>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;


