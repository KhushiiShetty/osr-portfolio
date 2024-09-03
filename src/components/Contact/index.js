import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import {useRef} from 'react'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_21e3v8a', 'template_zdfd8ml', form.current, { publicKey:'1cxBbMThY_2LG-9FD'})
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'O', 'N','T','A','C','T',' ','M', 'E']}
                    idx={15}
                />
                </h1>
                <p>
                    For internship opportunities, freelance projects, or just to chat about technology, please fill the form below.
                    
                </p>
                <p>Thank you!</p>
                
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name="name" placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required>

                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>

                    </form>
                </div>

            </div>
            <div className ="info-map">
                Khushii Shetty,
                <br />
                Amherst, MA, 01003
                <br />
                USA <br />
                <span>khushiishetty999@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[42.38747, -72.53139]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[42.38747, -72.53139]}>
                        
                    </Marker>

                </MapContainer>
            </div>
            
        </div>
        <div class="spinner">
          <div class="spinner1"></div>
      </div>
        
        
    </>
    )
}

export default Contact 

