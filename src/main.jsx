import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="container mx-auto">
        <Navbar />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);