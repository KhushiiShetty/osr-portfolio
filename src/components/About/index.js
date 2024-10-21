import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'


const About = () => {
  
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
      <>
      <div className='body'>
        <div className='container about-page'>
        
        
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'B', 'O', 'U', 'T',' ','M','E']}
                        idx={15} 
                    />
                </h1>
                <p> I’m a junior at the University of Massachusetts Amherst, pursuing a Bachelor of Science in Computer Engineering. With a solid foundation in full-stack development and a strong interest in AI and Data Engineering, I’m eager to dive into roles that allow me to merge creativity with technical expertise.
                   </p>
                <p> I’m actively seeking internships that span AI, Machine Learning, full-stack development, and project management. These roles align with my skills and aspirations, providing opportunities to contribute to cutting-edge projects while continuing to grow professionally. My keen attention to detail, strong organizational skills, and ability to communicate effectively make me well-suited for project management positions.</p>
                <p> I’m driven by curiosity and a commitment to continuous self-improvement. Challenges excite me as they present opportunities to learn and evolve as an engineer. I take pride in being a quick learner, always ready to tackle new concepts and technologies with enthusiasm.</p>
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
           
            </div>
            
            
        
        <div class="spinner">
          <div class="spinner1"></div>
      </div>
        
        
      
      </>
    )
}

export default About
