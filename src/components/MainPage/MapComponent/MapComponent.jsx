import React from 'react';
import './MapComponent.css';

const MapComponent = () => {
  return (
    <div className="map-container">
        <hr className='divide_line' />
        <div className="text-top"> <span className='logo_title'>ROLLSTAR</span> знаходиться у Вінниці</div>
       
        <div className="map-address">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.708369842543!2d28.448278277535476!3d49.22505757483164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b80f6f2ac35%3A0x1bd93c0d38963394!2z0YPQuy4g0JzQsNGC0YDQvtGB0LAg0JrQvtGI0LrQuCwgMTDQsCwg0JLQuNC90L3QuNGG0LAsINCS0LjQvdC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDIxMDE4!5e0!3m2!1sru!2sca!4v1714946056324!5m2!1sru!2sca" 
            title="GibsonGarage" 
            width="1300" 
            height="450" 
            style={{border: '4px solid #B1834F'}} 
            allowFullScreen=""  
            className="map"
            loading="lazy" >
            </iframe>
        </div>

        <div className="text-bottom"> Матроса кішки 10а 
        <span className='logo_title'> +38(068)271-18-16 </span>
        з 11:00 до 22:00
        </div>
    </div>
  );
}

export default MapComponent;
