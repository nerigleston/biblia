import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../../components/header/index.jsx';
import Biblia from './../../json/biblialivrecorrecao1.json';
import Main from '../../components/main/index.jsx';
import Capitulos from '../../components/capitulos/index.jsx';

const Livro = () => {
  const { id } = useParams(); // Access the id parameter from the URL
  const [livro, setLivro] = useState(id - 1);
  const [cap, setCap] = useState(0);

  return (
    <>
      <Header />
      <Capitulos livro={livro} cap={cap} Biblia={Biblia} setLivro={setLivro} setCap={setCap} />
      <Main livro={livro} cap={cap} Biblia={Biblia} />
    </>
  );
};

export default Livro;
