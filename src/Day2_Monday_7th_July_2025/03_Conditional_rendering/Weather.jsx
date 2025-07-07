import React from 'react'


function Weather({temperature}) {
  const message=(temperature)=>{
      if(temperature<15){
      return <div>It's cold outside. Temperature: {temperature}°C</div>
    }else if(temperature>=15 && temperature<25){
    return <div>It's a pleasant day. Temperature: {temperature}°C</div>
    }else{
      return <div>It's hot outside. Temperature: {temperature}°C</div>
    }
  }
  return (
    <div>
      {message(temperature)}
    </div>
  )
}

export default Weather