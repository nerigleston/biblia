import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import livrosData from '../../json/biblialivrecorrecao1.json';

export default function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    setLivros(livrosData);
  }, []);

  const renderLivros = (testament) => (
    <div className='border p-4 4K:p-10 m- flex justify-center flex-col'>
      <h3 className="font-bold mb-4 4K:mb-8">{testament}</h3>
      <ul className='grid grid-cols-3 gap-3 4K:gap-5'>
        {livros
          .filter((livro) => livro.periodo.includes(testament))
          .map((livro) => (
            <li key={livro.id} className='mb-2 text-center'>
              <Link
                to={`/livro/${livro.id}`}
                className='py-3 4K:py-10 cursor-pointer bg-gray-200 block'
              >
                {livro.nome}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );

  return (
    <div className='text-slate-800'>
      <h2 className='text-center p-2'>Livros da Bíblia</h2>

      <div className='flex justify-around text-center flex-col'>
        {renderLivros('Antigo Testamento - AT')}
        {renderLivros('Novo Testamento - NT')}
      </div>
    </div>
  );
}
