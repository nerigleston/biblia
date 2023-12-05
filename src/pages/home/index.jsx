import Header from "../../components/header/index";
import Livros from "../../components/livros";

export default function Home() {
  return (
    <>
      <Header />

      <div className="h-2/4">
        <h1 className="font-bold flex justify-center p-8 text-slate-800">
          Bíblia Sagrada
        </h1>
      </div>
      <div className="Livros">
        <Livros />
      </div>
    </>
  );
}
