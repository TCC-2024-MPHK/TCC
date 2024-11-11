import Primeira_imagem from '/imagem1-funcionamento (1).svg'
import Terceira_imagem from '/imagem3-funcionamento.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carrossel from '../components/Carrossel'

export default function Funcionamento() {
  return (
      <body>
        <Header/>
        <main className='bg-bege text-text-preto px-8 min-h-screen '>
  
          <section className='md:px-24 ' > 
              <h1 className='font-patua-one text-4xl mb-8 pt-16 md:text-4xl '>Funcionamento</h1>
              <img src={Primeira_imagem} alt="" className=' rounded-lg md:w-full ' />
              <p className='mt-5 text-xs	text-justify font-aleo font-light lg:pb-28 py-10 md:text-xl'>O <strong className='text-verde-claro font-patua-one '>Horta tech</strong> funciona na área de Robótica, propõe o desenvolvimento de um sistema automatizado de monitoramento para cultivo de hortaliças, empregando a plataforma Arduino como base. O objetivo principal é conceber uma solução que viabilize o controle eficaz de variáveis fundamentais para o desenvolvimento vigoroso das plantas, incluindo a umidade do solo, a temperatura ambiente e a luminosidade.</p>  
          </section>

          <h2 className='font-patua-one text-xl pb-8 md:px-24 md:text-3xl'>Veja o vídeo a seguir</h2>
          <section className='mb-8 md:px-24 md:flex items-center md:text-xl md:pb-10 '>
          <iframe className='mb-8 md:w-[1000px] md:pr-8  ' width="00" height="400" src="https://www.youtube.com/embed/Csm0JqUrKuQ?si=bWhhL3_u40Yab7sv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          

            <p className='text-xs text-justify font-aleo font-light'>O sistema é composto por sensores integrados ao <strong className='text-verde-claro font-patua-one'>Arduino</strong> que coletam dados em tempo real sobre as condições ambientais da horta. Descubra o que cada um faz abaixo , arraste para o lado para ver cada componente da sua horta automática. </p>
          </section>


          <section>
          <h1  className='font-patua-one text-4xl pb-8 text-center'>Componentes</h1>
          
          <Carrossel/>
     
  
          </section>

        </main>
        
        <Footer></Footer>

      </body>
    
  )
}
