import React from 'react';
const Weather = props =>{
  return(
    <div>
    {props.city && props.country &&   <p>Location : {props.city} , {props.country}</p> }
    {props.city && props.country &&   <p>Temperature:  {props.temperature}</p> }
    {props.city && props.country &&   <p>Humidity: {props.humidity}</p> }
    {props.city && props.country &&   <p>Description: {props.description}</p> }
    {props.error && <p>{props.error}</p>}
    </div>
  )
}

export default Weather;
