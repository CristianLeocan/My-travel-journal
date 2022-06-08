import React from 'react';
import './content.css'
import logoGoogleMaps from '../../Photos/gmap.png'

const Content = (props) => {
  return(
    <section className='content--card'>        
      <img src={`${props.item.img}`} alt="City" className='content--img'/>     
      <div className='feature'>{props.item.mainFeature}</div>   
      <div className='content--location'>
        <img src={logoGoogleMaps} alt="GoogleMaps" className='location--logoGoogleMaps'/>
        <p className='location--country'> 
          <span className='bold'>{props.item.country} </span>
        </p>
        <a className='location--link' href={props.item.googleMaps} target="_blank">View on Google Maps</a>
      </div> 
      <div className='content--city'>
        <h1>{props.item.city}</h1>
      </div>
      <div className='content--period'>
        <h4> {props.item.period}</h4>
        <p className='content--text'>{props.item.description} </p>
      </div>
    </section>
  )
}
export default Content