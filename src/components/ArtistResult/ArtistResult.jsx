import React from 'react';
import './ArtistResult.css';

const ArtistResult = ({ artist }) => {
  if (!artist) return null;

  return (
    <div className="grid-container">
      <div className="artist-card">
        <div className="card-img">
          <img 
            id="artist-img" 
            className="artist-img" 
            src={artist.image} 
            alt={artist.name} 
          />
          <div className="play">
            <span className="fa fa-solid fa-play"></span>
          </div>
        </div>
        <div className="card-text">
          <a title={artist.name} className="vst" href="/">
            <span className="artist-name" id="artist-name">{artist.name}</span>
            <span className="artist-categorie">Artista</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtistResult;