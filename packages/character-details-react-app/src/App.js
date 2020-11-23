import React, {useEffect, useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [character, setCharacter] = useState(null);

  const fetchCharacter = async () => {
    const id = new URLSearchParams(window.location.search).get('id');
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    const data = await response.json();
    setCharacter(data);
  }

  useEffect( () => {
    fetchCharacter();
  }, []);

  return (
    <div className="react-character-details">
      <img src={logo} className="logo" alt="logo" />
      {!!character && (
        <div className="container">
          <img src={character.image} alt=""/>
          <h2>{character.name}</h2>
          <p>status: {character.status}</p>
          <p>species: {character.species}</p>
          <p>gender: {character.gender}</p>
          <div className="highlighter">
            <SyntaxHighlighter language="javascript" style={a11yDark}>
              {JSON.stringify(character, null ,4)}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
