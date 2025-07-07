import React from 'react'

function Person({name,age,image,isMarried,hobbies}) {
  return (
    <>
    <div>Person Information.</div>
    <h2>Name:{name}</h2>
    <p>Age:{age}</p>
    <img src={image} alt={name} style={{width:"100px",height:"100px"}} />
    <p>Married:{isMarried ? "Yes" : "No"}</p>
    <h3>Hobbies:</h3> 
    <div>
      {
        hobbies.map((hobby,index)=>(
          <div key={index}>
            <strong>{hobby}</strong>
          </div>
        ))
      }
    </div>
    
    </>
    
  )
}

export default Person