import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import "./style/App.scss"
import "./style/header.scss"
import "./style/home.scss"
import Home from './Home'

import "./style/footer.scss"
import Contact from './Contact.jsx';
import "./style/contact.scss"
import "./style/services.scss"
import Services from './Services'
import "./style/media.scss"
function App(){
    return(
      <Router>
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
        </Routes>
        <Footer/>
      </Router>
    );
}


export default App