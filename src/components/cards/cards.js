import "./card.css"


import Loading from "../loading/loading"
import {useState} from 'react'
import MainBtns from "../main_btns/main_btns"

function Cards(props){

  const {info} = props
  const setUpdate = props.setUpdate || false
  const today = new Date().getMonth() + 1 // to use in measure if the film its old


  const [loading, setLoading] = useState(false)

 
  function measuringAverage(average){ 
    if(average <= 6) return "poor"
    if(average < 8) return "normal"
    return "great"
  }
  

  function showLoading(boolean){
    if(boolean) return <Loading />
  }
  

 


  return(

          <>
          
            {showLoading(loading)}
            {info.map((movie,index) => {
                
                const date = new Date(movie.release_date)
                const releaseDate = date.toLocaleDateString('pt-BR',{month:'2-digit',day:'2-digit',year:'numeric'})

                const month = date.getMonth() + 1 // to use in measure if film its old

                if(month < today - 2) return // To cut off if the movie its too old

                const {title,id,poster_path: bdPath,vote_average: voteAverage} = movie

                return(

                  <article key={`${title}-${id}`} className="card bg-dark " >
                    <section className="container_img">
                      <img className="card_img" src={`https://image.tmdb.org/t/p/original${bdPath}`} loading="lazy" alt={`Card do filme ${title}`} />
                    </section>

                    <section>

                      <h3 className="card_title fts-16 ms-1 ftc-primary">{title}</h3>

                      <p className="card_rel_date ftc-primary ms-1 fts-14">{releaseDate}</p>
                        
                      <span className={`vote_average ${measuringAverage(voteAverage)}  fts-16 bg-primary ftc-fff flex j-c aligin-center`}>{voteAverage}</span>
                      
                      

                    </section>

                    <MainBtns infos={[id,index,info]} setLoading={setLoading} setUpdate={setUpdate} />
                    
                  </article>

                )
            })}
          </>
            

          
           
    
  
  )

}

export default Cards