import error from './../../assets/404.png'

export default function Erro404() {
  return(
  <div className="bg-slate-800 text-white flex justify-center h-screen flex-col items-center gap-5">
    <img src= {error} alt="ERROR 404" srcSet="" height={96} width={96}/>
    <h3>Página Não Encontrada</h3>
    <p>Lamentamos, mas a página que você está procurando não existe.</p>
    <a href="/"><button className='bg-white text-slate-800 p-1 rounded-sm font-bold'>Volte para Home</button></a>
  </div>
  )
}