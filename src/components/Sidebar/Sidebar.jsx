import React from 'react';
import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="/">
            <img src={logoSpotify} alt="Logo do Spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHome} className="icon" />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Biblioteca */}
      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <FontAwesomeIcon icon={faBook} className="icon" />
            <span>Sua biblioteca</span>
          </button>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </div>

        {/* Seção de Playlists */}
        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar.</span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>

        {/* Cookies */}
        <div className="cookies">
          <a href="/">Cookies</a>
        </div>

        {/* Botão de Idioma */}
        <div className="languages">
          <button className="languages__button">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

