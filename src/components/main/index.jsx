export default function Main(props) {

  let contCap = () => {
    return props.Biblia[props.livro].capitulos[props.cap].map((vers, numvers) => {
      return (
        <p key = {numvers}><b>{numvers + 1}</b> {vers}</p>
      )
    });
  }

  return (
    <div className="">
      <h1 className="font-bold flex justify-center p-2">{props.Biblia[props.livro].nome} {props.cap + 1}</h1>
      <p className="p-5 gap-2 flex flex-col">{contCap()}</p>
</div>
  );
}