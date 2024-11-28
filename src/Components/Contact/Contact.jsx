import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/frontend_assets/msg-icon.png'
import mail_icon from '../../Assets/frontend_assets/mail-icon.png'
import phone_icon from '../../Assets/frontend_assets/phone-icon.png'
import location_icon from '../../Assets/frontend_assets/location-icon.png'
import white_arrow from '../../Assets/frontend_assets/white-arrow.png'

const Contact = () => {




  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "814f0739-c9dd-4b9a-8110-b37d75942216");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <>
    <div className='title'>
        <p>CONTACT US</p>
        <h2>Get in Touch</h2>
      </div>
    <div className='contact'>
      
      <div className="contact-col col-1" >
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>'Spice for Soul' Our Story: In the heart of kerala, where the scent of cardamom, mace and cloves hangs in the air, a group of determined women founded 'Spice for Soul'. With s vision to preserve their country's rich spice heritage.</p>
        <ul>
          <li><img src={mail_icon} alt="" /><a href="mailto:enquiry@spiceforsoul.in ">enquiry@spiceforsoul.in </a></li>
          <li><img src={phone_icon} alt="" />+91 90748 82473</li>
          <li><img src={location_icon} alt="" />Regalia Exim <br/>
          #24/125, Kothamangalam ,Karukadom P.O,Ernakulam, Kerala, India-686691</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your name'   required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Phone Number' pattern="^[0-9]{10}$" required />
          <label>Email-Id</label>
          <input type="email" name='email' placeholder='Enter Email-Id' pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"  required />
          <label>Write Your Message here</label>
          <textarea name="message" cols={30} rows={10} placeholder='Enter Your Meesage'></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </>
  )
}

export default Contact
