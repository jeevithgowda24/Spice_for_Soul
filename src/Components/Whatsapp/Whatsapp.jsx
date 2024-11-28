import React from 'react'
import './Whatsapp.css'
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
   
    function handleWhatsappClick(){
        const phoneNumber="9074882473";
        const message="Hello!"
        const url=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(url,"_blank");

    }

  return (
    <div className='whatsapp-button' onClick={handleWhatsappClick}>
      <FaWhatsapp size={32} color='#fff'/>
    </div>
  )
}

export default Whatsapp
