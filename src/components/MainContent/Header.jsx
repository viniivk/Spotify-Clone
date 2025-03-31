import React from 'react';
import arrowLeft from '../../assets/icons/small-left.png';
import arrowRight from '../../assets/icons/small-right.png';
import searchIcon from '../../assets/icons/search.png';
import './Header.css';


const Header = ({ searchTerm, onSearch }) => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={arrowLeft} alt="Seta para esquerda" />
        </button>
        <button className="arrow-right">
          <img src={arrowRight} alt="Seta para direita" />
        </button>
      </div>
      <div className="header__search">
        <img src={searchIcon} alt="Buscar" />
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;