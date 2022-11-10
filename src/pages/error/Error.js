import {Link} from 'react-router-dom'
import "./error.css"

function ErrorPage(){

  return(
    <main className='error_pg'>

      <div>

        <h1 className='flex aligin-center j-c gap-1 fts-28'>OOPS, PARECE QUE ESSA PÁGINA NÃO EXISTE  
        <svg xmlns="http://www.w3.org/2000/svg" width="3.2rem" height="3.2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="#FFBC26" d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><ellipse cx="11.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"/><ellipse cx="24.5" cy="16.5" fill="#664500" rx="2.5" ry="3.5"/><path fill="#664500" d="M23.485 27.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.485 4.379a.496.496 0 0 0 .232.544a.51.51 0 0 0 .596-.06c.009-.007 1.013-.863 4.657-.863c3.59 0 4.617.83 4.656.863a.496.496 0 0 0 .59.073a.5.5 0 0 0 .239-.557z"/><path fill="#5DADEC" d="M10 30c0 2.762-2.238 5-5 5s-5-2.238-5-5s4-10 5-10s5 7.238 5 10z"/><path fill="#664500" d="M30 13c-5.554 0-7.802-4.367-7.895-4.553a1 1 0 0 1 1.787-.899C23.967 7.694 25.713 11 30 11a1 1 0 1 1 0 2zM6 13a1 1 0 0 1 0-2c5.083 0 5.996-3.12 6.033-3.253c.145-.528.69-.848 1.219-.709c.53.139.851.673.718 1.205C13.921 8.437 12.704 13 6 13z"/></svg></h1>

        <nav className='txt-center fts-20 mt-5'>
          <Link to="/inicio" className='txt-dec-none ftc-dark bg-primary pdd-1 hover-1 me-1'>Página inicial</Link>
          <Link to="/assistidos" className='txt-dec-none ftc-dark bg-primary pdd-1 hover-1 me-1'>Assistidos</Link>
          <Link to="/pendente-assistir" className='txt-dec-none ftc-dark bg-primary pdd-1 hover-1'>Preciso Assistir</Link>
        </nav>

      </div>
     
    </main>
  )

}

export default ErrorPage