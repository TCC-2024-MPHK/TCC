import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Referencias() {
  return (
    <body >
        <Header/>
        
        <main className='bg-bege text-text-preto min-h-screen '>
            <section className='md:px-80 '>

                <h1 className='font-patua-one text-xl pt-16 px-8 text-center lg:text-4xl '>Referências Bibliográficas</h1>

                <div className='  flex flex-col mx-8 p-3.5 font-aleo text-xs text-center pt-8 mt-8 lg:text-2xl pb-24 gap-8'>
                    <p>VESPUCCI, G . Do quarto de empregada à varanda gourmet: plantas de apartamento em Florianópolis. 2023.</p>
                    <p>DA SILVA, Bruna Cibele Dos Santos Da Silva; SANTOS, Virgínia Souza ; ALMEIDA, Martha Elisa Ferreira De . Hortas domésticas: uma fonte de saúde dentro de casa. 2021.</p>
                    <p>PEREIRA, Bruno Duarte Azevedo . Medidor de pH com calibração de pH e compensação automática de temperatura. 2016.</p>
                    <p>ALVES, Bruno Godoy Segaloti . ANÁLISE DA DURABILIDADE E EFICIÊNCIA DE SENSORES RESISTIVOS DE UMIDADE DO SOLO EM PLATAFORMA ARDUINO. 2020.</p>
                </div>

            </section>

        </main>

        <Footer></Footer>
    </body>

  )
}

