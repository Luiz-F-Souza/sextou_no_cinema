import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import api from '../../services/the-movie-api'
import Loading from '../../components/loading/loading'
import './movie.css'
import './movie_query.css'


function Movie(){

  const {id} = useParams()
  
  

  const [film,setFilm] = useState({})
  const [loading, setLoading] = useState(true)
  const nav = useNavigate()

  

  useEffect(() => {

    async function loadingFilm(){

      try{
        const response = await api.get(`/movie/${id}`,{

          params:{
            api_key: '942fdd976bafbf9b9e6f08ec14189285',
            language: 'pt-BR'
          }
          
        })
  
        setFilm(response.data)
        setLoading(false)
        


      }catch(err){
          nav('/not-found', {replace: true})
      }
     
      

    }

    loadingFilm()

   
    
  }, [id,nav])

  function settingMoneyType(number){
    
    
    number = String(number)
    
    
    
    //R$100.000,00 || R$100.000.000,00
    if(number.length === 6 || number.length === 9 || number.length === 12 ){
      const newNumber = number.match(/[0-9]{3}/g).join('.')
     
      return `$ ${newNumber},00`
    } 
    //R$1.000.000,00 || $1.000,00
    if(number.length === 7 || number.length === 4 || number.length === 10){
      const newNumber = `${number[0]}.${number.match(/[0-9]{3}/g).join('.')}`
      return `$ ${newNumber},00`
    }
    //R$10.000.000,00 || R$10.000,00
    if(number.length === 8 || number.length === 5 || number.length === 11){
      const newNumber = `${number[0]}${number[1]}.${number.match(/[0-9]{3}/g).join('.')}`
      
      return `$ ${newNumber},00`
    }
    
    return `$ ${number},00`
    
  }

 

  
  if(loading) return <Loading />
  
  const releaseDate = new Date(film.release_date).toLocaleDateString('pt-BR',{month:'long',day:'2-digit',year:'numeric'})

  const {title} = film


  

  return(
    <main className='main_film'>
      <header className='header_film mb-2 flex j-c grid col-1 gap-2'>
        <img className='img_film ' src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} />
        <h2 className='title_filme fts-24 txt-center mb-1'>{title}</h2>
      </header>

      <article id='details_container' className='mb-2 grid col-2 gap-2 pdd-2'>
        

        <section className='brd-1 pdd-1 span-2'>
          <h4 className='fts-20 txt-center mb-2'>Sinopse</h4>

          <p className='overview_film fts-20 txt-center'>
            {film.overview}
          </p>

        </section>

        
        
        <section className='brd-1 pdd-1'>
          <h4 className='fts-20 txt-center mb-2'>Lançamento:</h4>  

          <p className=' fts-20 txt-center'>{releaseDate}</p>
        </section>

        <section className='brd-1 pdd-1'>
          <h4 className='fts-20 txt-center mb-2 '>Genero:</h4>  

          <ul className=' gap-4 flex j-c'>
            {
              !film.genres ? "Não informado" :

              film.genres.map(cat => {
                return(
                  <li key={cat.id} className='fts-20'>{cat.name}</li>
                )
              })

            }
          </ul>
        </section>

        <section className='brd-1 pdd-1'>
          <h4 className='fts-20 txt-center mb-2'>Valor gasto:</h4>  

          <p className='fts-20 txt-center'>{film.budget ? settingMoneyType(film.budget): "Não informado"}</p>
        </section>
        
          
        <section className='brd-1 pdd-1'>
          <h4 className='fts-20 txt-center mb-2'>Lucro:</h4>  

          <p className='fts-20 txt-center'>{film.revenue ? settingMoneyType(film.revenue) : 'Não informado'}</p>
        </section>
        
          
        

        
        <section className='brd-1 pdd-1'>
          <h4 className='fts-20 txt-center mb-2'>Avaliação:</h4>  

          <p className='fts-20 txt-center'>{Number(film.vote_average).toFixed(1)} de 10</p>
        </section>

        <section className='brd-1 pdd-1'>
          <h4 className='fts-20 txt-center mb-2'>Frase de efeito:</h4>  

          <p className='fts-20 txt-center'>{film.tagline}</p>
        </section>
        

        <a rel='external' href={`https://www.youtube.com/results?search_query=${title} trailer pt-br`} target="_blank" className='fts-20 pdd-1 bg-primary ftc-dark txt-dec-none hover-1 flex j-c aligin-center span-2'><h4>Trailer</h4></a>
        
      </article>
    </main>
  )

}

export default Movie

