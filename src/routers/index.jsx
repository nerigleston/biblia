import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '.././pages/home';
import '../index.css';
import Livro from '.././components/livroDetalhe';
import Biblias from '../components/biblia';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/livros" element={<Biblias />} />
        <Route path="/livro/:id" element={<Livro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
