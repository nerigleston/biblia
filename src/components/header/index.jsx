export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-center space-x-12 bg-slate-800 p-8 text-white">
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/biblia">Biblia</a>
          </li>
          <li>
            <a href="https://www.instagram.com/nerigleston">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}