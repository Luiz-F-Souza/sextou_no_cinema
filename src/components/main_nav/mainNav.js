import {Link} from 'react-router-dom'
import './main_nav_query.css'
import {useState, useEffect} from 'react'

function MainNav({body}){

  const [openMobNav, setOpenMobNav] = useState(false)
  

  useEffect(() => {
    body.classList.toggle('lock')
  },[openMobNav])

  return(

      <nav id='main_nav' >

        <section id='nav_mobile' className='hidden hover-1' onClick={() => openMobNav ? setOpenMobNav(false) : setOpenMobNav(true)}>

        <svg className={`${openMobNav ? 'no_active' : ''} active hidden`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 640H0V512h2048v128zm0 1024H0v-128h2048v128zm0-513H0v-127h2048v127z"/></svg>

        <svg className={`${openMobNav ? 'active abs' : 'no-active'} hidden`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"/></svg>

        </section>
        <section className={`main_nav_links ${openMobNav ? 'open' : 'closed'}`}>
          <ul id='main_nav_container_links' className='no-style flex gap-2 fts-20'>
            <li onClick={() => setOpenMobNav(false)}>
              <Link className='txt-dec-none ftc-dark ftc-primary' to="/inicio">Início</Link>
            </li>

            <li onClick={() => setOpenMobNav(false)} >
              <Link className='txt-dec-none ftc-dark ftc-primary' to="/assistidos">Assistidos</Link>
            </li>

            <li onClick={() => setOpenMobNav(false)} >
              <Link className='txt-dec-none ftc-dark ftc-primary' to="/preciso-assistir">Preciso Assistir</Link>
            </li>
          </ul>
        </section>
        
      </nav>
  )

}

export default MainNav