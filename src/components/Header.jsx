import React from "react";
import "../styles/Header.css";

function Header({ clubInfo, stats }) {
  return (
    <header className="App-header">
      <div className="club-info">
        <img
          src={clubInfo?.logo_url || "/default-logo.png"}
          alt="Club Logo"
          className="club-logo"
          onError={(e) => (e.target.style.display = "none")}
        />

        <div className="club-details">
          <h1>{clubInfo?.club_name || "Liverpool FC"}</h1>
          <p className="motto">
            "{clubInfo?.motto || "You'll Never Walk Alone"}"
          </p>
          <div className="club-stats">
            <span>📍 {clubInfo?.stadium || "Anfield"}</span>
            <span>📅 Fundado: {clubInfo?.founded_year || "1892"}</span>
            <span>👥 Jugadores: {stats?.total_players || 0}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;



