import React, { useState } from "react";

function Request() {
  const [order, setOrder] = useState("");
  const handleSubmit = () =>{
    alert("Your Request have been sent will respond within 24hours thank you")
   }
  
  return (
    <>
    <div className="order">
      
   <p>In order to compolete hiring process you will need to file your complaint to the lawyer in the form below</p>
   
  
    






    <form >      
            <textarea 
            value={order}
            onChange={e => setOrder(e.target.value)}
            placeholder="File your complaint here"
            name="textarea" rows="25" cols="60">Write something here</textarea>   
      <button type="submit" onClick={handleSubmit}><a href="http://localhost:3000/">Submit</a></button>
    </form>

    </div>
    </>
  );
}
export default Request;