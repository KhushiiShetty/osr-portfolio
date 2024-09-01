import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import Loader from 'react-loaders'

const About = () => {
  
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
      <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'B', 'O', 'U', 'T',' ','M','E']}
                        idx={15} 
                    />
                </h1>
                <p> I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. </p>
                <p> I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.</p>
                <p> If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!</p>
            </div>

            <div className='stage-cube-cont'>
              <div className="cubespinner">
                <div className='face1'>
                  <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                
                </div>
                <div className='face2'>
                  <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                
                </div>
                <div className='face3'>
                  <FontAwesomeIcon icon={faPython} color="#28A4D9"/>
                
                </div>
                <div className='face4'>
                  <FontAwesomeIcon icon={faJava} color="#5ED4F4"/>
                
                </div>
                <div className='face5'>
                  <FontAwesomeIcon icon={faReact} color="#EFD81D"/>
                
                </div>
                <div className='face6'>
                  <FontAwesomeIcon icon={faCss3} color="#EC428"/>
                
                </div>
              </div>


            </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default About
