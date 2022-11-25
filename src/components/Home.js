import React, { useEffect, useState } from "react";




export default function Home() {

  const [showData, setShowData] = useState ()
  const apiUrl = "http://localhost:5000/data"


    let displayData
   function pullJson(){
    fetch(apiUrl)
    .then(response=> response.json())
    .then(responseData=> {
      displayData=responseData.splice(0,3).map(function(data){
        return(
          <>
          <div className="card border-primary mb-3" key={data.id}>
            <div className="card-header">{data.title}</div>
            <div className="card-body text-primary">
              <p className="card-text">{data.content}</p>
            </div>
          </div>
          </>
        )
      })
      console.log(responseData)
      setShowData(displayData)
  
    })

   }







  useEffect(()=>{
    pullJson()
  

  },[])


  return (
    <>

      <figure className="text-center" >
          <blockquote className="blockquote">
            <p>“If God places a child before you, and you are too busy to wield either a positive or negative influence…you just did the latter! You communicated that the child doesn’t matter and isn’t important.” 
              </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">― Wess Stafford, President Emeritus of Compassion International</cite>
          </figcaption>
      </figure>

      <div className="card-group">
        {showData}
      </div>

      
            

       
           </>
  )
}
