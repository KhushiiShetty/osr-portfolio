import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','K', 'h', 'u', 's', 'h', 'i', 'i',',']
  const jobArray = [
    'C',
    'o',
    'm',
    'p ',
    'u',
    't',
    'e',
    'r',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n', 'e', 'e', 'r','.'
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2> Project Management / Full stack developer / Aspiring AI and Data scientist / Student
            
          </h2>
          
          
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      
      <div class="spinner">
          <div class="spinner1"></div>
      </div>
      
      

      
    </>
  )
}

export default Home