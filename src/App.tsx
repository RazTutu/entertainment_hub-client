import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/home/home';
import Games from '@/pages/games/games';
import AuthPage from '@/pages/AuthPage';
import Movies from '@/pages/movies/movies';
import Books from '@/pages/books/books';
import Statistics from '@/pages/statistics/statistics';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/books" element={<Books />} />
        <Route
          path="/statistics"
          element={<Statistics />}
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
