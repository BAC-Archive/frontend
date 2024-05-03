import { createRoot } from 'react-dom/client';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import Dashboard from './pages/Dashboard';

const root = createRoot(document.getElementById('root') as HTMLElement);


root.render(
  <ChakraProvider>
    <CSSReset />
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  </ChakraProvider>
);

