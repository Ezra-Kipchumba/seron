import React from "react";


function Signup() {
    const handleSubmit = () =>{
        alert("Submitted successfully kindly log in")
       }
    

  

  return (
            <div className="reg">
            <div className="rapper">
    <div className="title">
      Registration Form
    </div>
    <div className="form">
       <div className="inputfield">
          <label>First Name</label>
          <input type="text" className="input"/>
       </div>  
        <div className="inputfield">
          <label>Last Name</label>
          <input type="text" className="input"/>
       </div>  
       <div className="inputfield">
          <label>Password</label>
          <input type="password" className="input"/>
       </div>  
      <div className="inputfield">
          <label>Confirm Password</label>
          <input type="password" className="input"/>
       </div> 
        <div className="inputfield">
          <label>Gender</label>
          <div className="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
       </div> 
       <div className="inputfield">
          <label>Register as</label>
          <div className="custom_select">
            <select>
              <option value="">Select</option>
              <option value="advocate">Advocate</option>
              <option value="guardian/parent">Parent/Guardian</option>
            </select>
          </div>
       </div> <br></br>
        <div className="inputfield">
          <label>Email Address</label>
          <input type="text" className="input"/>
       </div> 
       <div className="inputfield">
          <label>Phone Number</label>
          <input type="text" className="input"/>
       </div> 
      
      <div className="inputfield terms">
          <label className="check">
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>

        
          
          <p>Agreed to terms and conditions</p>
       </div> 
      <div className="inputfield">
        <a href='http://localhost:3000/portal'><input type="submit" value="Register" class="btn" onClick={handleSubmit}/></a>
      </div>
    </div>
</div>	
            </div>
            
  );
}
export default Signup;