import React from 'react'
import { useState, useEffect } from 'react'

export default function Lawyers() {

        

    const handleSubmit = () =>{
       }
    const [lawyers,setLawyers] = useState()

    const getUrl = "http://localhost:5000/data"


    let displayLawyers
    async function getLawyers(){
        const response = await fetch(getUrl)
        const responseData = await response.json()
        displayLawyers = responseData.map(function(data){
            return(
                <div className='lawyers'>
                <h5 key={data.id}> {data.lawyername}</h5>
                <p>{data.education}</p>
                <p><a href='#'>{data.linkedin}</a></p>

                <button><a href='http://localhost:3000/request'>Hire</a></button>
             

                </div>


                
            )
        })
        console.log(responseData)
        setLawyers(displayLawyers)
        }


   useEffect(() =>{
    console.log("helo")
        getLawyers()
   },[])







  return (
    <div className='hire'>
        <h2>Chunga Mjunior Registered Advocates.</h2>
                        <p>{lawyers}</p>
        </div>
  )
}
