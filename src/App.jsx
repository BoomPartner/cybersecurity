import { useState, useEffect } from 'react'
import Primera from './components/Primera'
import Segunda from './components/Segunda'
import Tercera from './components/Tercera'
import Cuarta from './components/Cuarta'
import Quinta from './components/Quinta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Whatsapp from './components/Prueba'

function App() {
  const [count, setCount] = useState(0)
  const [isElementVisible, setElementVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [animation1, setAnimation1] = useState(false);


  // Función para capturar el ancho de la ventana al redimensionar
  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
    console.log('Ancho de la ventana:', newWindowWidth);
  };

  // Función para capturar el ancho de la ventana al redimensionar
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('#slide_01');

      if (element && !animation1) {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
          setAnimation1(true)
          setElementVisible(true);
        } else {
          setElementVisible(false);
        }
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animation1]);


  return (
    <>
      <Primera width={windowWidth}></Primera>
      <Segunda animation={isElementVisible} width={windowWidth} ></Segunda>
      <Cuarta width={windowWidth}></Cuarta>
     
      <Whatsapp></Whatsapp>
      <Contact></Contact>
      <Footer width={windowWidth}></Footer>
    </>
  )
}

export default App
