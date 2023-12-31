import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '.././pages/home';
import '../index.css';
import Livro from '.././components/livroDetalhe';
import Biblias from '../components/biblia';
import Erro404 from '../pages/notFound';
import Contatos from '../pages/contatos';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/biblia" element={<Biblias />} />
        <Route exact path="/contato" element={<Contatos />} />
        <Route exact path="/livro/:id" element={<Livro />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);