import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";

// Componentes
import Header from "./components/Header";
import Filters from "./components/Filters";
import PlayerCard from "./components/PlayerCard";
import Footer from "./components/Footer";

// Configurar base URL de la API
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
axios.defaults.baseURL = API_BASE_URL;

function App() {
  const [players, setPlayers] = useState([]);
  const [clubInfo, setClubInfo] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState("");

  // Cargar datos al montar el componente
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [playersRes, clubRes, statsRes] = await Promise.all([
        axios.get("/api/players"),
        axios.get("/api/club-info"),
        axios.get("/api/stats"),
      ]);

      setPlayers(playersRes.data.data || []);
      setClubInfo(clubRes.data.data || {});
      setStats(statsRes.data.data || {});
    } catch (err) {
      console.error("Error cargando datos:", err);
      setError("No se pudieron cargar los datos. ¿Está el servidor funcionando?");
    } finally {
      setLoading(false);
    }
  };

  const filterByPosition = async (position) => {
    try {
      setLoading(true);
      setSelectedPosition(position);

      const url = position ? `/api/players?position=${position}` : "/api/players";
      const response = await axios.get(url);
      setPlayers(response.data.data || []);
    } catch (err) {
      console.error("Error filtrando jugadores:", err);
      setError("Error filtrando jugadores");
    } finally {
      setLoading(false);
    }
  };

  // Pantalla de carga inicial
  if (loading && !players.length) {
    return (
      <div className="App">
        <div className="loading">
          <div className="liverpool-logo-loader"></div>
          <p>Cargando Liverpool FC...</p>
        </div>
      </div>
    );
  }

  // Pantalla de error
  if (error) {
    return (
      <div className="App">
        <div className="error">
          <h2>⚠️ Error</h2>
          <p>{error}</p>
          <button onClick={loadData} className="retry-btn">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  // Vista principal
  return (
    <div className="App">
      <Header clubInfo={clubInfo} stats={stats} players={players} />

      <Filters
        selectedPosition={selectedPosition}
        filterByPosition={filterByPosition}
      />

      <main className="players-section">
        <h2>Plantilla {selectedPosition && `- ${selectedPosition}s`}</h2>

        {loading ? (
          <div className="loading-players">
            <p>Cargando jugadores...</p>
          </div>
        ) : players.length === 0 ? (
          <div className="no-players">
            <p>No hay jugadores para mostrar</p>
          </div>
        ) : (
          <div className="players-grid">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        )}
      </main>

      {stats && (
        <section className="team-stats">
          <h2>Estadísticas del Equipo</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Jugadores</h4>
              <span className="stat-number">{stats.total_players}</span>
            </div>
            <div className="stat-card">
              <h4>Edad Promedio</h4>
              <span className="stat-number">{stats.average_age}</span>
            </div>
            <div className="stat-card">
              <h4>Nacionalidades</h4>
              <span className="stat-number">
                {stats.nationalities_distribution?.length || 0}
              </span>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;


