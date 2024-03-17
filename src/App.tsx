import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/lib/react-query';
import Home from '@/pages/home/home';
import Games from '@/pages/games/games';
import Statistics from '@/pages/statistics/statistics';

import Library from './pages/library/library';
import './App.css';
import { useDialog } from './stores';
import { Overlay } from './components/overlay';

function App() {
  const dialog = useDialog();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route
            path="/statistics"
            element={<Statistics />}
          />
        </Routes>
        {dialog && <Overlay />}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
