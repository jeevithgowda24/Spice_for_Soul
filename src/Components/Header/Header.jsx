import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Image5 from '../../Assets/frontend_assets/Image5.jpeg'
import Image8 from '../../Assets/frontend_assets/Image8.jpg'
import Image6 from '../../Assets/frontend_assets/Image6.jpg'


const slides = [
  {
    image: Image5,
    heading: 'Spice For Soul',
    text: "'Spice for Soul' Our Story: In the heart of kerala, where the scent of cardamom, mace and cloves hangs in the air, a group of determined women founded 'Spice for Soul'. With s vision to preserve their country's rich spice heritage. these women embarked on a tasteful journey. Hand-picked cardamom pods, delicate mace and aromatic cloves becomes the essence of their brand. Through meticuluos craftsmanship, they created spice blends that speak to the soul. Spice for Soul, atestament to the resilience and will of kerala women, now graces kitchens around the world, adding a touch of warmth and authenticity to every dish",
  },
  {
    image:Image6,
    heading: 'Gewürze für die Seele',
    text: "'Spice for Soul' Unsere Geschichte: Im Herzen von Kerala, wo der Duft von Kardamom, Muskatblüte und Nelken in der Luft liegt, gründete eine Gruppe entschlossener Frauen „Spice for Soul“. Mit der Vision, das reiche Gewürzerbe ihres Landes zu bewahren. Diese Frauen begaben sich auf eine geschmackvolle Reise. Handverlesene Kardamomkapseln, zarte Muskatblüte und aromatische Nelken bilden die Essenz ihrer Marke. Durch sorgfältige Handwerkskunst schufen sie Gewürzmischungen, die die Seele ansprechen. Spice for Soul, ein Beweis für die Widerstandskraft und den Willen der Frauen in Kerala, ziert mittlerweile Küchen auf der ganzen Welt und verleiht jedem Gericht einen Hauch von Wärme und Authentizität",
  },
  {
    image: Image8,
    heading: 'ہماری کہانی',
    text: 'کیرالہ کے دل میں، جہاں الائچی، جائفل اور لونگ کی خوشبو ہوا میں رچی بسی ہے، ایک پُرعزم خواتین کے گروپ نے "اسپائس فار سول" کی بنیاد رکھی۔ اپنے ملک کے مسالوں کے بھرپور ورثے کو محفوظ رکھنے کے وژن کے ساتھ، یہ خواتین ایک لذیذ سفر پر گئیں۔ ہاتھ سے چنی گئی الائچی کی پھلیاں، نازک جائفل اور خوشبودار لونگ ان کے برانڈ کی روح بن گئیں۔ پیچیدہ دستکاری کے ذریعے، انہوں نے ایسی مسالہ جات کی آمیزش تیار کی جو دل و جان کو چھو لیتی ہیں۔"اسپائس فار سول"، کیرالہ کی خواتین کی عزم اور محنت کا ثبوت ہے، جو اب دنیا بھر کے باورچی خانوں کی زینت بن چکا ہے اور ہر ڈش میں گرمجوشی اور خالص پن کا اضافہ کرتا ہے۔'
  },
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  const { image, heading, text } = slides[currentSlide];

  return (
    <div className='header' style={{ backgroundImage: `url(${image})` }}>
      <div className="header-contents">
        <h2>{heading}</h2>
        <p>{text}</p>
        <Link to='/products'><button className='button'>View Products</button></Link> 
      </div>
    </div>
  );
}

export default Header;
