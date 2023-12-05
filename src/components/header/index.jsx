export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-center space-x-12 bg-slate-800 p-8 4K:p-20 text-white">
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/biblia">Biblia</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}