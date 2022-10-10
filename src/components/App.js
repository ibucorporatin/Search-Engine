import React from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navebar from './Navebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  
    render() {
        return (
          <>  <Navebar/>
                   <BrowserRouter>
              
              <Routes>
                <Route >
                  <Route path='/'  element={<Home/>} />
                  <Route  path="/about" element={<About/>} />
                  <Route path="/contact" element={<Contact/>} />
               
                </Route>
              </Routes>
            
            </BrowserRouter></>
     
           
       
      
         );

    }
}
 
export default App;


