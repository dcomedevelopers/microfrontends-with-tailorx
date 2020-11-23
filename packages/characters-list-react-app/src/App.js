import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character/',
    );
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect( () => {
    fetchCharacters();
  }, []);

  return (
    <div className="react-character-list">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        {characters.map((character) => (
          <a href={`/character?id=${character.id}`} className="character-card" key={character.id}>
            <img src={character.image} alt=""/>
            <div className="character-card__info">
              <h3>
                {character.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
