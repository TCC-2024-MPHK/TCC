import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Referencias() {
  return (
    <body >
        <Header/>
        
        <main className='bg-bege text-text-preto min-h-screen '>
            <section>

                <h1 className='font-patua-one text-xl pt-16 px-8 text-center '>Referências Bibliográficas</h1>

                <div className=' block mx-8 p-3.5 '>
                    <p className='mt-8 font-aleo text-xs text-center pt-8'>VESPUCCI, G . Do quarto de empregada à varanda gourmet: plantas de apartamento em Florianópolis. 2023.</p>
                    <p className='mt-8 font-aleo text-xs text-center pt-8'>DA SILVA, Bruna Cibele Dos Santos Da Silva; SANTOS, Virgínia Souza ; ALMEIDA, Martha Elisa Ferreira De . Hortas domésticas: uma fonte de saúde dentro de casa. 2021.</p>
                    <p className='mt-8 font-aleo text-xs text-center pt-8'>PEREIRA, Bruno Duarte Azevedo . Medidor de pH com calibração de pH e compensação automática de temperatura. 2016.</p>
                    <p className='mt-8 font-aleo text-xs text-center mb-24 pt-8'>ALVES, Bruno Godoy Segaloti . ANÁLISE DA DURABILIDADE E EFICIÊNCIA DE SENSORES RESISTIVOS DE UMIDADE DO SOLO EM PLATAFORMA ARDUINO. 2020.</p>
                </div>

            </section>

        </main>

        <Footer></Footer>
    </body>

  )
}

