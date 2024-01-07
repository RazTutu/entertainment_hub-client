import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/lib/react-query';
import Home from '@/pages/home/home';
import Games from '@/pages/games/games';
import Movies from '@/pages/movies/movies';
import Books from '@/pages/books/books';
import Statistics from '@/pages/statistics/statistics';

import './App.css';

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route
            path="/statistics"
            element={<Statistics />}
          />
        </Routes>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
