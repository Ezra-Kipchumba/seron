import React from "react";
import NavBar from "./NavBar";

import { Routes, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Portal from "./Portal";
import Lawyers from "./Lawyers";
import Footer from "./Footer";
import Signup from "./Signup";
import Request from "./Request";


 

function App(){

 return(
<div>
<NavBar />
<Routes>
      <Route  path="/about"element={< About />} />
        
        <Route  path="/contact"element={< Contact />} />
        <Route  path="/portal"element={< Portal />} />
        <Route  path="/hire"element={< Lawyers />} />

        
         
        <Route  path="/"element={< Home />} />
        <Route  path="/request"element={< Request />} />
        <Route  path="/signup"element={< Signup />} />
         
        
     </Routes>
        <Footer />
      


         
         
       



        </div>



 )
 }
 export default App;