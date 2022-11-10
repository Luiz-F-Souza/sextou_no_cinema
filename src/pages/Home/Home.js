import Cards from "../../components/cards/cards"
import api from "../../services/the-movie-api"
import Loading from "../../components/loading/loading"
import {useEffect, useState} from "react"
import './home-query.css'

function Home(){

  const apiKey = '942fdd976bafbf9b9e6f08ec14189285'
  const language = 'pt-BR'

  const [movies, setMovies] = useState([])
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [loading,setLoading] = useState(true)


  //START LOADING CONTENT
  useEffect(() => {
   
    async function loadingMovies(){
      
      const response = await api.get("movie/now_playing",{
        params:{
          api_key: apiKey,
          language
        }
      })
   

      const sDate = new Date(response.data.dates.minimum).toLocaleDateString("pt-BR",{month:'long',day:'2-digit',year:'numeric'})
      const eDate =  new Date(response.data.dates.maximum).toLocaleDateString("pt-BR",{month:'long',day:'2-digit',year:'numeric'})
    
      
      setMovies(response.data.results)
      setStartDate(sDate)
      setEndDate(eDate)

      

      if(!localStorage.getItem('@movies_watcheds')) localStorage.setItem('@movies_watcheds',null)
      if(!localStorage.getItem('@movies_to_watch')) localStorage.setItem('@movies_to_watch',null)
      
      setLoading(false)
      
    }

    loadingMovies()
    
    
    
    
    
  },[])


 
  if(loading) return <Loading />

  
  return(
    <main id="main_home" className=" grid col-4 gap-2 pdd-3">
      <Cards  info={movies}/>
      
      
    </main> 
  )
}

export default Home