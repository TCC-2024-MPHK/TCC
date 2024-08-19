import Primeira_imagem from '/imagem1-funcionamento.svg'
import Terceira_imagem from '/imagem3-funcionamento.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carrossel from '../components/Carrossel'

export default function Funcionamento() {
  return (
      <body>
        <Header/>
        <main className='bg-bege text-text-preto px-8 min-h-screen'>
  
          <section > 
              <h1 className='font-patua-one text-4xl mb-8 pt-16 lg:text-4xl'>Funcionamento</h1>
              <img src={Primeira_imagem} alt="" className=' rounded-lg md:w-full ' />
              <p className='mt-5 text-xs	text-justify font-aleo font-light lg:pb-28 py-10 lg:text-xl'>O <strong className='text-verde-claro font-patua-one '>Horta tech</strong> funciona na área de Robótica, propõe o desenvolvimento de um sistema automatizado de monitoramento para cultivo de hortaliças, empregando a plataforma Arduino como base. O objetivo principal é conceber uma solução que viabilize o controle eficaz de variáveis fundamentais para o desenvolvimento vigoroso das plantas, incluindo a umidade do solo, a temperatura ambiente e a luminosidade.</p>  
          </section>
          
          <h2 className='font-patua-one text-xl pb-8 lg:-mb-16 lg:text-4xl'>Veja o vídeo a seguir</h2>
          <section className='pb-16 flex flex-col lg:flex-row lg:items-center'>

            <div className='lg:w-1/2 lg:order-1 h-full'>
           
            <p className='text-xs text-justify font-aleo font-light -mb-56 pr-20 lg:text-xl '>
            O sistema é composto por sensores integrados ao <strong className='text-verde-claro font-patua-one'>Arduino</strong> que coletam dados em tempo real sobre as condições ambientais da horta. Descubra o que cada um faz abaixo , arraste para o lado para ver cada componente da sua horta automática. 
            </p>
            </div>

            <div className='lg:w-1/2 lg:order-2'>
            <img src={Terceira_imagem} alt="" className='rounded-lg w-full order-1 ' />
            </div>
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
