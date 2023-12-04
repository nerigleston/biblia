import Header from '../../components/header'
import Foto from './../../assets/eu.jpg'

export default function Contatos() {
  return (
    <>
      <Header />
      <div className='bg-slate-800 text-white flex-col items-center flex justify-center gap-5 h-[94vh]'>
        <img src={Foto} height={250} width={250} className='rounded-full p-5 flex items-center'/>
          <h1 className='font-bold'>Contatos</h1>
          <div className="flex justify-center gap-5 flex-col items-center md:flex-row">
            {/* <a href="https://wa.me/5583987049025">
              <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="" srcSet="" />
            </a> */}
            <a href="mailto:nerifilho1256@gmail.com">
              <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="" srcSet="" />
            </a>
            <a href="https://www.linkedin.com/in/nerigleston/">
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" srcSet="" />
            </a>
            <a href="https://github.com/nerigleston">
              <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" srcSet="" />
            </a>
            <a href="https://instagram.com/nerigleston">
              <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="" srcSet="" />
            </a>
          </div>
        </div>
    </>
  )
}