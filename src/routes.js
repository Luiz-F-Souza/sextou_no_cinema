import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Loading from "./components/loading/loading";

import Home from "./pages/Home/Home";
import ToWatch from "./pages/To-watch/ToWathc";
import Watched from "./pages/Watched/Watched";
import Movie from "./pages/Movie/movie";

import ErrorPage from "./pages/error/Error";

function RoutesApp(){

  return(

    <BrowserRouter>

    <Header/>
   
    <Routes>

      <Route path="/"  element={<Home/>}/>
      <Route path="/inicio"  element={<Home/>}/>

      <Route path="/assistidos"  element={<Watched/>}/>

      <Route path="/preciso-assistir"  element={<ToWatch/>}/>

      <Route path="/filme/:id"  element={<Movie/>}/>

      <Route path="*" element={<ErrorPage/>}/>

    </Routes>
  
  </BrowserRouter>

  )

  
}

export default RoutesApp