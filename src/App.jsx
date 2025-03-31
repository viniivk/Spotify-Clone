import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showArtist, setShowArtist] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term.trim() !== '') {
      setShowArtist(true);

      fetch('/artists.json') 
        .then((response) => response.json())
        .then((data) => {
          const filteredArtists = data.artists.filter((artist) =>
            artist.name.toLowerCase().includes(term.toLowerCase())
          );

          if (filteredArtists.length > 0) {
            const artist = filteredArtists[0]; 
            setSelectedArtist({
              name: artist.name,
              image: artist.urlImg || 'default-image-url', 
            });
          } else {
            setSelectedArtist(null); 
          }
        })
        .catch((error) => {
          console.error("Erro ao carregar os dados:", error);
          setSelectedArtist(null); 
        });
    } else {
      setShowArtist(false);
      setSelectedArtist(null);
    }
  };

  return (
    <div className="app-container">
      <Sidebar onSearch={handleSearch} />
      <MainContent 
        searchTerm={searchTerm} 
        onSearch={handleSearch}
        showArtist={showArtist}
        selectedArtist={selectedArtist}
      />
      <Footer />
    </div>
  );
};

export default App;

