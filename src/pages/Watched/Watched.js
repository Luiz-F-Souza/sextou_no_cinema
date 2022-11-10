
import {useEffect, useState} from 'react'
import Cards from '../../components/cards/cards'
import Loading from '../../components/loading/loading'

function Watched(){

  const [movies, setMovies] = useState([])
  const [loading,setLoading] = useState(false)
  const [update, setUpdate] = useState(false)


  function gettingMovies(){
    setLoading(true)
    const items = localStorage.getItem('@movies_watcheds')

    if(items === null) setMovies(null)
    setMovies(JSON.parse(items))

    setUpdate(false)
    setLoading(false)

  }
  useEffect(() => {
    
    gettingMovies()
  },[])

  useEffect(() => {
    gettingMovies()
    
  },[update])

  if(loading) return <Loading />

  return(

    <>
   
      {

      movies === null ? 
      <main>
        <h2 className='fts-24 txt-center mt-2 pdd-3'>Nenhum filme assistido ainda 😢</h2>
      </main> 

        : 

      <main id='main_watched' className="grid col-4 gap-2 pdd-3"> <Cards info={movies} setUpdate={setUpdate} /> </main>

        

     }

    </>
    
    
  )

}

export default Watched