export default function Capitulos(props) {
  const selectLivros = () => (
    <select
      className="bg-slate-800 text-white font-bold py-2 px-4 4K:py-4 4K:px-8 rounded "
      onChange={(e) => {
        props.setLivro(e.target.value);
        props.setCap(0);
      }}
      value={props.livro}
    >
      {props.Biblia.map((a, b) => (
        <option
          className="bg-slate-800 text-white font-bold py-2 px-4 4K:py-4 4K:px-8 rounded"
          key={b}
          value={b}>
          {a.nome}
        </option>
      ))}
    </select>
  );

  const SelectCap = () => (
    <select
      className="bg-slate-800 text-white font-bold py-2 px-4 4K:py-4 4K:px-8 rounded"
      onChange={(e) => props.setCap(parseInt(e.target.value, 10))}
    >
      {props.Biblia[props.livro].capitulos.map((a, b) => (
        <option key={b} value={b}>
          {b + 1}
        </option>
      ))}
    </select>
  );

  const btnCap1 = () => (
    <>
      <button
        className="bg-slate-800 text-white font-bold py-2 px-4 4K:py-4 4K:px-8 rounded mr-2"
        onChange={(e) => props.setCap(parseInt(e.target.value, 10))}
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
        className="bg-slate-800 text-white font-bold py-2 px-4 4K:py-4 4K:px-8 rounded mr-2"
        onChange={(e) => props.setCap(parseInt(e.target.value, 10))}
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
    <div className="gap-3 4K:gap-8 flex flex-col items-center">
      <div className="flex flex-row gap-5 4K:gap-10 text-center items-center">
        <div className="flex flex-col text-center">
          <p>Livro</p>
          {selectLivros()}
        </div>
        <div className=" flex flex-col text-center ">
          <p>Capitulos</p>
          {SelectCap()}
        </div>
      </div>
      <div className="gap-2 4K:gap-4 flex flex-wrap text-center justify-center p-3 4K:p-6">
        {btnCap1()}
      </div>
    </div>
  );
}
