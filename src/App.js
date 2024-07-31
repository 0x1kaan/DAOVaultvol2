import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VotePage from './pages/VotingPage';
import ResultsPage from './pages/ResultsPage';
import DAOHomePage from './pages/DAOHomePage';
import UserProfilePage from './pages/UserProfilePage'; // Kullanıcı profili sayfasını import ettik
import SettingsPage from './pages/SettingsPage'; // Ayarlar sayfasını import ettik
import './styles/App.css';

// Kimlik doğrulama kontrol fonksiyonu
const isAuthenticated = () => {
  // Burada kimlik doğrulama kontrolü yapılabilir
  // Örneğin, tarayıcıda bir kullanıcı token'ı olup olmadığı kontrol edilebilir
  return localStorage.getItem('userToken') !== null;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Ana sayfa */}
        <Route path="/" element={<HomePage />} />

        {/* Oy verme sayfası - sadece giriş yapmış kullanıcılar erişebilir */}
        <Route path="/vote" element={isAuthenticated() ? <VotePage /> : <HomePage />} />

        {/* Sonuçlar sayfası - herkes erişebilir */}
        <Route path="/results" element={<ResultsPage />} />

        {/* DAO sayfası - dinamik DAO ID parametresi ile */}
        <Route path="/dao-home/:daoId" element={<DAOHomePage />} />

        {/* Kullanıcı profili sayfası - sadece giriş yapmış kullanıcılar erişebilir */}
        <Route path="/user-profile" element={isAuthenticated() ? <UserProfilePage /> : <HomePage />} />

        {/* Ayarlar sayfası - sadece giriş yapmış kullanıcılar erişebilir */}
        <Route path="/settings" element={isAuthenticated() ? <SettingsPage /> : <HomePage />} />

        {/* Geçersiz URL'ler için ana sayfaya yönlendirme */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
