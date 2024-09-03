// import './index.scss'
// import React from 'react';
// import AnimatedLetters from '../AnimatedLetters'
// import { useEffect, useState, useRef } from 'react'
// import backg1 from '../../assets/images/background1.png'
// const backg = () => {
//     const backgref = useRef()
// }
// const Portfolio = () => {
//     const [letterClass, setLetterClass] = useState('text-animate')
    
//     useEffect(() => {
//       setTimeout(() => {
//         return setLetterClass('text-animate-hover')
//       }, 3000)
//     }, [])

//     return (
//     <>
//         <div className='background' ref = {backgref}>
//             <img className ="backg"
//             ref = {backgref}
//             src = {backg1}/>
//         </div>
//         <div className='container portfolio-page'>
            
//             <h1 className='page-title'>
//                 <AnimatedLetters
//                 letterClass={letterClass}
//                 strArray={['P','R','O','J','E','C','T','S']}
//                 idx={8} />
//             </h1>
//             <div>
//             <p>
//                 Om Sai Ram
//             </p>
//             </div>
//         </div>
//     </>

//     )

// }
// export default Portfolio;
// export default backg;

import './index.scss';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import anime from 'animejs'; // Import Anime.js
import backg1 from '../../assets/images/background1.jpg'; // Not used in this file but can be useful if needed

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Anime.js animation setup
    anime({
      targets: '.ml1 .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeInOutExpo',
      duration: 1000,
      delay: (el, i) => 500 * i,
      endDelay: 1000,
      loop: true
    });
  }, []); // Make sure there’s a comma before the closing bracket

  return (
    <>
      <div className='background'>
        {/* The background image is set in CSS, so no need for an <img> tag */}
      </div>
      <div className='container portfolio-page'>
        <h1 className='page-title'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
            idx={8}
          />
        </h1>
        <h1 className="ml1">
            <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters">THURSDAY</span>
                <span className="line line2"></span>
            </span>
        </h1>
        <div>
          <p>Om Sai Ram</p>
        </div>
      </div>
    </>
  );
}

export default Portfolio;

