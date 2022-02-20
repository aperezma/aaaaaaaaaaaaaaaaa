


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home';
import Contacto from './pages/Contacto'
import PoliticasPrivacidad from './pages/PoliticasPriacidad'
import Articulos from './pages/Articulos'
function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Nav />
       <Routes>
         <Route path="/" exact element = {<Home />}/>
         <Route path="/home" exact element = {<Home />}/>
         <Route path="/articulos" exact element = {<Articulos />}/>
         <Route path="/politicasprivacidad" exact element = {<PoliticasPrivacidad />}/>
         <Route path="/contacto" exact element = {<Contacto />}/>
       </Routes> 
       <Footer />
     </Router>
    </div>
  );
}

export default App;
