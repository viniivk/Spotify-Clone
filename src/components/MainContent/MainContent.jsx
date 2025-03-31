//import React, { useState } from 'react';
import Header from './Header';
import ArtistResult from '../ArtistResult/ArtistResult';
import './MainContent.css';

import playlist1 from '../../assets/playlist/1.jpeg';
import playlist2 from '../../assets/playlist/2.png';
import playlist3 from '../../assets/playlist/3.jpeg';
import playlist4 from '../../assets/playlist/4.jpeg';
import playlist5 from '../../assets/playlist/5.jpeg';
import playlist6 from '../../assets/playlist/6.jpeg';
import playlist7 from '../../assets/playlist/7.jpeg';
import playlist8 from '../../assets/playlist/8.jpeg';
import playlist9 from '../../assets/playlist/9.jpeg';
import playlist10 from '../../assets/playlist/10.jpeg';
import playlist11 from '../../assets/playlist/11.jpeg';
import playlist12 from '../../assets/playlist/12.jpeg';
import playlist13 from '../../assets/playlist/13.jpeg';
import playlist14 from '../../assets/playlist/14.jpeg';
import playlist15 from '../../assets/playlist/15.jpeg';

const MainContent = ({ searchTerm, onSearch, showArtist, selectedArtist }) => {
  // Dados das playlists
  const playlists = [
    { id: 1, image: playlist1, title: 'Boas festas' },
    { id: 2, image: playlist2, title: 'Feitos para você' },
    { id: 3, image: playlist3, title: 'Lançamentos' },
    { id: 4, image: playlist4, title: 'Creators' },
    { id: 5, image: playlist5, title: 'Para treinar' },
    { id: 6, image: playlist6, title: 'Podcasts' },
    { id: 7, image: playlist7, title: 'Sertanejo' },
    { id: 8, image: playlist8, title: 'Samba e pagode' },
    { id: 9, image: playlist9, title: 'Funk' },
    { id: 10, image: playlist10, title: 'MPB' },
    { id: 11, image: playlist11, title: 'Rock' },
    { id: 12, image: playlist12, title: 'Hip Hop' },
    { id: 13, image: playlist13, title: 'Indie' },
    { id: 14, image: playlist14, title: 'Relax' },
    { id: 15, image: playlist15, title: 'Música Latina' },
  ];

  return (
    <main>
      <div className="main-container">
        <Header searchTerm={searchTerm} onSearch={onSearch} />

        <div className="playlist-container">
          {showArtist ? (
            <div id="result-artist">
              <ArtistResult artist={selectedArtist} />
            </div>
          ) : (
            <div id="result-playlists">
              <div className="playlist">
                <h1 id="greeting">Boas vindas</h1>
                <h2 className="session">Navegar por todas as seções</h2>
              </div>
              <div className="offer__scroll-container">
                <div className="offer__list">
                  <section className="offer__list-item">
                    {playlists.map((playlist) => (
                      <a href="/" className="cards" key={playlist.id}>
                        <div className={`cards card${playlist.id}`}>
                          <img src={playlist.image} alt={playlist.title} />
                          <span>{playlist.title}</span>
                        </div>
                      </a>
                    ))}
                  </section>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
