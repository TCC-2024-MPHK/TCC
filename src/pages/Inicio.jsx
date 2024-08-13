import Primeira_imagem from '/imagem1-home.svg'
import Segunda_imagem from '/imagem2-home.svg'
import Fake_imagem from '/imagem do projeto fake.svg'
import Quadro from '/quadro-quadrados.svg'
import Nav from '../components/Nav'

export default function Inicio() {
  return (
    <body>
        <Nav />
        <main className='bg-bege text-text-preto ' >
            
            <section className=' '>
                <h1 className='font-patua-one text-4xl mb-8 pt-16 px-8'>Horta tech</h1>
                <img src={Primeira_imagem} alt="" className='px-8' />
                <p className='mt-5 text-xs	text-justify font-aleo font-light px-8'>O <strong>Horta tech</strong> tem como objetivo o cultivo de hortaliças em ambientes domésticos, mas vai além disso, Ele auxilia indivíduos que não dispõem de tempo para o cuidado de suas plantas, fornecendo alertas quando suas hortaliças necessitam de atenção e despeja quantidade de água necessária para cada hortaliça.</p>

                <div className='bg-verde-claro mt-16 pb-9 px-8' >
                    <p className=' pt-9 mb-8 font-aleo text-justify text-xs italic  font-semibold '>O cultivo de vegetais proporciona uma série de vantagens para a saúde, tais como, redução do estresse, o consumo regular desses alimentos pode ajudar na prevenção de doenças como câncer, diabetes e obesidade. </p>
                    <img className='mb-6'src={Fake_imagem} alt=""  />
                    
                </div>

                <div className='flex items-center '  >
                        <img className=' rounded-md absolute left-20p' src={Quadro} alt="" />
                        <img className=' rounded-md absolute left-40p' src={Quadro} alt="" />
                        <img className=' rounded-md absolute right-40p' src={Quadro} alt="" />
                        <img className=' rounded-md absolute right-20p' src={Quadro} alt="" />
                         
                </div>  
                    
                <div className='pb-16 px-8'>
                    <h2 className='font-patua-one text-xl mb-8  mt-16 '>Mas por que hortaliças?</h2>
                    <img src={Segunda_imagem} alt="" className=' rounded-lg '/>
                    <p className='mt-5 mb-24 text-xs text-justify font-aleo font-light text-xs'>Com base em estudos, o cultivo de hortaliças traz diversos benéficos para a saúde: combate o estresse, estimula á criatividade e melhora o bem-estar, além de tornar o ambiente mais sociável. O consumo delas previne o câncer, diabetes e obesidade. Por fim saborear alimentos com temperos caseiros é muito mais prazeroso!</p>
                </div>
                
            </section>
            
        </main>

        <footer className='bg-verde-header flex items-center '>
            <p className='text-text-branco text-tr mx-6 my-2.5 font-rem '>horta_tech@gmail.com</p>
            <p className='text-text-branco text-tr text-end mx-6 my-2.5 font-rem '>UNASP SP - Estr. de Itapecerica, 5859
            Capão Redondo, São Paulo - SP, 05890-020</p>
        </footer>
    </body>
    
)
}