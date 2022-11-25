import React, { useState } from "react";

function Request() {
  const [order, setOrder] = useState("");
  
  return (
    <>
   <p>In order to compolete hiring process you will need to file your complaint to the lawyer in the form below</p>
   
  
    






    <form>      
            <textarea 
            value={order}
            onChange={e => setOrder(e.target.value)}
            placeholder="File your complaint here"
            name="textarea" rows="25" cols="60">Write something here</textarea>   
      <button type="submit">Submit</button>
    </form>
    </>
  );
}
export default Request;