import './index.scss'
import React from 'react';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    return (
    <>
        <div className='container portfolio-page'>
            
            <h1 className='page-title'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['P','R','O','J','E','C','T','S']}
                idx={8} />
            </h1>
            <div>
            <p>
                Om Sai Ram
            </p>
            </div>
        </div>
    </>

    )

}
export default Portfolio;

