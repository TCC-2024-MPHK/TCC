import Primeira_imagem from '/imagem1-home.svg'
import Segunda_imagem from '/imagem2-home.svg'
import Fake_imagem from '/imagem do projeto fake.svg'
import Quadro from '/quadro.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Inicio() {
  return (
    <body>
        <Header/>
        <main className='bg-bege text-text-preto min-h-screen ' >
            
            <section className=' '>
                <h1 className='font-patua-one text-4xl mb-8 pt-16 px-8 md:px-20 lg:text-4xl'>Horta tech</h1>
                <img src={Primeira_imagem} alt="" className='px-8 md:w-full md:px-20' />
                <p className='mt-5 text-xs	text-justify font-aleo font-light px-8 md:px-20'>O <strong className='text-verde-claro font-patua-one '>Horta tech</strong> tem como objetivo o cultivo de hortaliças em ambientes domésticos, mas vai além disso, Ele auxilia indivíduos que não dispõem de tempo para o cuidado de suas plantas, fornecendo alertas quando suas hortaliças necessitam de atenção e despeja quantidade de água necessária para cada hortaliça.</p>

               

                <div className='bg-verde-claro mt-16 pb-9 px-8 lg:flex lg:flex-col-reverse md:px-20 lg:pt-10 lg:items-center'>
                    <p className='pt-9 mb-8 font-aleo text-justify text-xs italic font-semibold lg:pb-10 lg:text-center'>
                    O cultivo de vegetais proporciona uma série de vantagens para a saúde, tais como, redução do estresse, o consumo regular desses alimentos pode ajudar na prevenção de doenças como câncer, diabetes e obesidade.
                    </p>
                    <img className='mb-6 md:w-full lg:w-80 lg:h-15 lg:mb-0' src={Fake_imagem} alt="" />
                </div>



                <div className='flex items-center mb-28 '  >
                        <img className=' rounded-md absolute left-20p lg:w-13 lg:h-170px' src={Quadro} alt="" />   
                        <img className=' rounded-md absolute left-40p md:left-teste lg:w-13 lg:h-170px' src={Quadro} alt="" />
                        <img className=' rounded-md absolute right-40p md:right-teste lg:w-13 lg:h-170px' src={Quadro} alt="" />
                        <img className=' rounded-md absolute right-20p lg:w-13 lg:h-170px' src={Quadro} alt="" />
                         
                </div>  

                <h2 className='font-patua-one text-xl px-8 pb-8 lg:-mb-16 lg:text-end md:px-20'>Mas por que hortaliças? </h2>        
                <section className='md:px-20 pb-16 px-8 flex flex-col md:flex-row md:items-start'>
                    <div className='md:w-1/2 md:pr-8'>
                    <img src={Segunda_imagem} alt="" className='rounded-lg w-full' />
                    </div>

                    <div className='md:w-1/2 flex flex-col justify-end'>
                    <p className='text-xs text-justify font-aleo font-light md:-mt-8 lg:pt-20'> Com base em <strong className='text-verde-claro font-patua-one'>estudos</strong>, o cultivo de hortaliças traz diversos benéficos para a saúde: combate o estresse, estimula a criatividade e melhora o bem-estar, além de tornar o ambiente mais sociável. O consumo delas previne o câncer, diabetes e obesidade. Por fim, saborear alimentos com temperos caseiros é muito mais prazeroso!</p>
                </div>
                </section>

                
                
            </section>
            
        </main>

        <Footer></Footer>
    </body>
    
)
}