
import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import memoji from '../../../assets/images/memoji.png';
import './index.scss'
const AnimatedMemoji = () => {
  useEffect(() => {
    anime({
      targets: '.memoji-image',
      translateY: [
        { value: -10, duration: 1500 },
        { value: 10, duration: 1500 },
      ],
      scale: [
        { value: 1.05, duration: 2000 },
        { value: 1, duration: 2000 },
      ],
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
    });
  }, []);

  return (
    <div className="background-container">
      <img src={memoji} alt="Memoji" className="memoji-image" />
    </div>
  );
};

export default AnimatedMemoji;
