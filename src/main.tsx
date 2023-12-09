
import { createRoot } from 'react-dom/client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render (
     <ChakraProvider theme={{ styles: { global: { body: { bg: '#010026' } } } }}>
      <CSSReset />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
);

