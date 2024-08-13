import Segunda_imagem from '/imagem2-funcionamento.svg'
import Primeira_imagem from '/imagem1-funcionamento.svg'
import Nav from '../components/Nav'

export default function Funcionamento() {
  return (
      <body>
        <Nav/>
        <main className='bg-bege text-text-preto px-8 '>
  
          <section > 
              <h1 className='font-patua-one text-4xl mb-8 pt-16'>Horto tech</h1>
              <img src={Primeira_imagem} alt="" className=' rounded-lg ' />
              <p className='mt-5 text-xs	text-justify font-aleo font-light'>O <strong>Horta tech</strong> funciona na área de Robótica, propõe o desenvolvimento de um sistema automatizado de monitoramento para cultivo de hortaliças, empregando a plataforma Arduino como base. O objetivo principal é conceber uma solução que viabilize o controle eficaz de variáveis fundamentais para o desenvolvimento vigoroso das plantas, incluindo a umidade do solo, a temperatura ambiente e a luminosidade.</p>  
          </section>
          
          
          <section className='pb-16'>
              <h2 className='font-patua-one text-xl mb-8  mt-14 '>Funcionamento</h2>
              <img src={Segunda_imagem} alt="" className=' rounded-lg '/>
              <p className='mt-5 text-xs text-justify font-aleo font-light'>O sistema é composto por sensores integrados ao Arduino que coletam dados em tempo real sobre as condições ambientais da horta.  Além disso, o sistema pode ser programado para acionar automaticamente a irrigação quando os níveis de umidade do solo estiverem abaixo do ideal.</p>
          </section>
        </main>
      </body>
    
  )
}
