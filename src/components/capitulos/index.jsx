import Livros from "../livros";

// Capitulos.js
export default function Capitulos(props) {
  const selectLivros = () => (
    <select
      className="bg-slate-800 text-white font-bold py-2 px-4 rounded "
      onChange={(e) => {
        props.setLivro(e.target.value);
        props.setCap(0);
      }}
      value={props.livro}
    >
      {props.Biblia.map((a, b) => (
        <option
        className="bg-slate-800 text-white font-bold py-2 px-4 rounded"
          key={b}
          value={b}>
          {a.nome}
        </option>
      ))}
    </select>
  );

  const btnCap = () => (
    <>
      {props.Biblia[props.livro].capitulos.map((a, b) => (
        props.Biblia[props.livro].capitulos.length > 1 && <button className="bg-slate-800 text-white font-bold py-2 px-4 rounded " key={b} onClick={() => props.setCap(b)}>
          {b + 1}
        </button>
      ))}
    </>
  );

  const btnCap1 = () => (
    <>
      <button
        className="bg-slate-800 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={() => {
          const previousCap = props.cap - 1;
          if (previousCap >= 0) {
            props.setCap(previousCap);
          }
        }}
      >
        Anterior
      </button>
      
      <button
        className="bg-slate-800 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const nextCap = props.cap + 1;
          if (nextCap < props.Biblia[props.livro].capitulos.length) {
            props.setCap(nextCap);
          }
        }}
      >
        Próximo
      </button>
    </>
  );
  


  return (
    <div className="gap-3 flex flex-col items-center">
      <div className="flex mt-2">
        {selectLivros()}
      </div>
      <div className="gap-2 flex flex-wrap text-center justify-center p-3">
        {btnCap()}
      </div>
      <div className="gap-2 flex flex-wrap text-center justify-center p-3">
        {btnCap1()}
      </div>
    </div>
  );
}
