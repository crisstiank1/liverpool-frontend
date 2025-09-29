import React from 'react';
import '../styles/Filters.css';
import { PLAYER_POSITIONS } from '../utils/constants';

function Filters({ selectedPosition, filterByPosition }) {
  return (
    <section className="filters">
      <h3>Filtrar por posición:</h3>
      <div className="filter-buttons">
        {PLAYER_POSITIONS.map((pos, i) => (
          <button
            key={i}
            onClick={() => filterByPosition(pos)}
            className={selectedPosition === pos ? 'active' : ''}
          >
            {pos === '' ? 'Todos' : pos + 's'}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Filters;



