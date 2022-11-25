import React, { useState } from "react";


function Signup() {
    const handleSubmit = () =>{
        alert("Submitted successfully kindly log in")
       }
    

  

  return (
            <>
            <div class="rapper">
    <div class="title">
      Registration Form
    </div>
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input"/>
       </div>  
       <div class="inputfield">
          <label>Password</label>
          <input type="password" class="input"/>
       </div>  
      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input"/>
       </div> 
        <div class="inputfield">
          <label>Gender</label>
          <div class="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
       </div> 
       <div class="inputfield">
          <label>Register as</label>
          <div class="custom_select">
            <select>
              <option value="">Select</option>
              <option value="advocate">Advocate</option>
              <option value="guardian/parent">Parent/Guardian</option>
            </select>
          </div>
       </div> <br></br>
        <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"/>
       </div> 
       <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input"/>
       </div> 
      
      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>

        
          
          <p>Agreed to terms and conditions</p>
       </div> 
      <div class="inputfield">
        <a href='http://localhost:3000/portal'><input type="submit" value="Register" class="btn" onClick={handleSubmit}/></a>
      </div>
    </div>
</div>	
            </>
            
  );
}
export default Signup;