import {Link} from 'react-router-dom';
import './main_btns.css'

function MainBtns(props){

  const [id,index,info] = props.infos

  const {setLoading} = props

  const setUpdate = props.setUpdate || false

  const isWatched =  JSON.parse(localStorage.getItem('@movies_watcheds'))?.some(item => id === item.id) || false
  const toWatch =  JSON.parse(localStorage.getItem('@movies_to_watch'))?.some(item => id === item.id) || false



  function handleBtn(btn,movieId,index){
  
    btn.classList.toggle('checked')

    function settingLocalH(key){

      setLoading(true)

      const getItem =  localStorage.getItem(key)

      const list = JSON.parse(getItem) || []

      list.push(info[index])

      localStorage.setItem(key,JSON.stringify(list))


      setLoading(false)
    }

    function deletingLocalH(key){

      setLoading(true)

        const fullData = JSON.parse(localStorage.getItem(key))

        const newData = fullData.filter((item) => {
         return movieId !== item.id
        })
        

        if(newData[0]){

          localStorage.setItem(key, JSON.stringify(newData))

          
        }else{
          
          localStorage.setItem(key,null)

        }

        
        
      if(setUpdate) setUpdate(true)
      
      setLoading(false)
    }


      // BTN SAVE WATCHEDS

    if(btn.classList.contains('btn_watched') && btn.classList.contains('checked')) return settingLocalH('@movies_watcheds')

      // BTN DELETE WATCHEDS

    if(btn.classList.contains('btn_watched') && !btn.classList.contains('checked')) return deletingLocalH('@movies_watcheds')


    // BTNS TO WATCH

    btn.classList.contains('checked') ? settingLocalH('@movies_to_watch') : deletingLocalH('@movies_to_watch')
    


  }

  return(

    <section className="card_btns grid col-3 gap-1 pdd-1 mb-2">

      <button className={`btn_main hover-1 fts-14 btn_watched ${isWatched ? 'checked' : ''}`} onClick={(e) => handleBtn(e.target,id,index)}>Assistido</button>
      <button className={`btn_main hover-1 fts-14  ${toWatch ? 'checked' : ''}`} onClick={(e) => handleBtn(e.target,id,index)}>Preciso assistir</button>

      <Link  className="btn_main hover-1 ftc-dark txt-dec-none fts-14  bg-primary flex aligin-center j-c" to={`/filme/${id}`}>Detalhes</Link>
                        

    </section>

  )
}

export default MainBtns