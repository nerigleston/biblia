import { useState } from 'react';
import Header from './../../components/header/index.jsx';
import Biblia from './../../json/biblialivrecorrecao1.json'
import Main from '../../components/main/index.jsx';
import Capitulos from '../../components/capitulos/index.jsx';

export default function Biblias() {

  const [livro, setLivro] = useState(0);
  const [cap, setCap] = useState(0);

  return (
    <>
      <Header />
      <Capitulos livro = {livro} cap = {cap} Biblia = {Biblia} setLivro = {setLivro} setCap = {setCap}/>
      <Main livro = {livro} cap = {cap} Biblia = {Biblia}/>
    </>
  );
}