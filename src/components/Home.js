import React, { useEffect, useState } from "react";




export default function Home() {

  const [showData, setShowData] = useState ()
  const apiUrl = "http://localhost:5000/data"


    let displayData
   function pullJson(){
    fetch(apiUrl)
    .then(response=> response.json())
    .then(responseData=> {
      displayData=responseData.map(function(data){
        return(
          <div className='contenthome'>
      <h6 key={data.id}>{data.title}</h6>
      <p>{data.content}</p>
      </div>
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
    <div className="homequote">

      “If God places a child before you, and you are too busy to wield either a positive or negative influence…you just did the latter! You communicated that the child doesn’t matter and isn’t important.” ― Wess Stafford, President Emeritus of Compassion International
      {showData}

          </div>
           </>
  )
}
