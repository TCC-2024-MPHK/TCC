import Primeira_imagem from '/Primeira_image.svg'
import Horta from '/frutas.svg'
import Fake_imagem from '/imagem do projeto fake.svg'
import Quadro from '/quadro.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Inicio() {
  return (
    <body>
        <Header/>
        <main className='bg-bege text-text-preto min-h-screen ' >
            
            <section className=' md:px-24 '>
                <h1 className='font-patua-one text-4xl mb-8 pt-16 px-8 lg:text-4xl'>Horta tech</h1>
                <img src={Primeira_imagem} alt="" className='px-8 md:w-full ' />
                <p className='mt-5 text-xs	text-justify font-aleo font-light px-8 lg:text-xl'>O <strong className='text-verde-claro font-patua-one '>Horta tech</strong> tem como objetivo o cultivo de hortaliças em ambientes domésticos, mas vai além disso, Ele auxilia indivíduos que não dispõem de tempo para o cuidado de suas plantas, fornecendo alertas quando suas hortaliças necessitam de atenção e despeja quantidade de água necessária para cada hortaliça.</p>

</section>               

                <div className='bg-verde-claro mt-16 pb-9 px-8 lg:flex lg:flex-col-reverse md:px-24 lg:pt-10 lg:items-center'>
                    <p className='pt-9 mb-8 font-aleo text-justify text-xs italic font-semibold lg:pb-10 lg:text-center lg:text-xl '>
                    O cultivo de vegetais proporciona uma série de vantagens para a saúde, tais como, redução do estresse, o consumo regular desses alimentos pode ajudar na prevenção de doenças como câncer, diabetes e obesidade.
                    </p>
                    <img className='mb-6 md:w-full lg:w-80 lg:h-15 lg:mb-0' src={Fake_imagem} alt="" />
                </div>



                <div className='flex items-center mb-28  '  >
                        <img className=' rounded-md absolute left-20p lg:w-13 lg:h-170px ' src={Quadro} alt="" />   
                        <img className=' rounded-md absolute left-40p md:left-teste lg:w-13 lg:h-170px' src={Quadro} alt="" />
                        <img className=' rounded-md absolute right-40p md:right-teste lg:w-13 lg:h-170px' src={Quadro} alt="" />
                        <img className=' rounded-md absolute right-20p lg:w-13 lg:h-170px' src={Quadro} alt="" />
                         
                </div>  

                <section className=' font-light px-8 pb-8 md:px-24'>
                    <h2 className='font-patua-one text-xl pb-8  md:text-3xl '>Mas por que hortaliças?</h2>
                    <div className='md:flex md:items-center md:text-xl md:pb-10'>
                        <img src={Horta} alt="" className='mb-8 md:w-1/2 md:pr-8 '/>
                        <p className='font-aleo text-justify '>Com base em <strong className='text-verde-claro font-patua-one'>estudos</strong>, o cultivo de hortaliças traz diversos benéficos para a saúde: combate o estresse, estimula a criatividade e melhora o bem-estar, além de tornar o ambiente mais sociável. O consumo delas previne o câncer, diabetes e obesidade. Por fim, saborear alimentos com temperos caseiros é muito mais prazeroso!</p>
                    </div>
                </section>
                
                
                
            
            
        </main>

        <Footer></Footer>
    </body>
    
)
}