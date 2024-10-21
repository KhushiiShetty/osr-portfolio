// import React, { useEffect, useState } from "react";
// import Loader from "react-loaders";
// import AnimatedLetters from "../AnimatedLetters";
// import "./index.scss";

// // Static mock data for demonstration purposes
// const mockPortfolioData = [
//     {
//         name: "StreamSmart",
//         description: "StreamSmart is a student-led platform transforming education into a binge-worthy experience. It connects global instructors and offers a distraction-free learning environment, with plans to integrate content, build an instructor interface, personalize learning with AI, and enable secure payments.",
//         image: "https://via.placeholder.com/150", // Placeholder image URL
//         url: "https://streamsmart.onrender.com"
//     },
//     {
//         name: "Project Two",
//         description: "Description for project two",
//         image: "https://via.placeholder.com/150", // Placeholder image URL
//         url: "https://example.com"
//     }
// ];

// const Portfolio = () => { 
//     const [letterClass, setLetterClass] = useState('text-animate');
//     const [portfolio, setPortfolio] = useState([]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLetterClass('text-animate-hover');
//         }, 3000);

//         return () => {
//             clearTimeout(timer);
//         }
//     }, []); // Ensure this effect runs only once

//     useEffect(() => {
//         // Simulate fetching data by setting static mock data
//         setPortfolio(mockPortfolioData);
//     }, []);

//     const renderPortfolio = (portfolio) => {
//         return (
//             <div className="images-container">
//                 {
//                     portfolio.map((port, idx) => (
//                         <div className="image-box" key={idx}>
//                             <img 
//                                 src={port.image}
//                                 className="portfolio-image"
//                                 alt="portfolio" 
//                             />
//                             <div className="content">
//                                 <p className="title">{port.name}</p>
//                                 <h4 className="description">{port.description}</h4>
//                                 <button
//                                     className="btn"
//                                     onClick={() => window.open(port.url)}
//                                 >
//                                     View
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         );
//     }

//     return (
//         <>
//             <div className="container portfolio-page">
//                 <h1 className="page-title">
//                     <AnimatedLetters
//                         letterClass={letterClass}
//                         strArray={"Portfolio".split("")}
//                         idx={15}
//                     />
//                 </h1>
//                 <div>{renderPortfolio(portfolio)}</div>
//             </div>
//             <Loader type="pacman" />
//         </>
//     );
// }

// export default Portfolio;

import React, { useEffect, useState } from "react";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const mockPortfolioData = [
  {
      name: " StreamSmart",
      description: "StreamSmart is a student-led platform transforming education into a binge-worthy experience. It connects global instructors and offers a distraction-free learning environment, with plans to integrate content, build an instructor interface, personalize learning with AI, and enable secure payments.",
      image: "https://i.pinimg.com/originals/e7/06/7c/e7067cc6252d613764f6f6bd2eeea709.gif", // Placeholder image URL
      url: "https://streamsmart.onrender.com"
  },
  {
      name: "Optimized routing system",
      description: "Python program that can orchestrate multifaceted services for restaurants, end users, and delivery personnel within a leading food delivery service provider.",
      image: "https://i.pinimg.com/564x/71/2b/c4/712bc4ac83d15175aefcd862a1794a54.jpg", // Placeholder image URL
      url: "https://github.com/KhushiiShetty/Optimised-Delivery-Routing-System.git"
  },
  {
    name: "GoFish in C with UNIX",
    description:"This project is a implementation of the classic card game 'Go Fish,' developed in C. The game is designed for one human player and one computer player. It utilizes basic UNIX software development tools, including gcc, gdb, and make.",
    image: "https://raw.githubusercontent.com/KhushiiShetty/GoFish-in-C-with-UNIX/refs/heads/thumbnail/DALL·E%202024-10-20%2021.36.14%20-%20A%20dynamic%20and%20cool%20representation%20of%20a%20GoFish%20card%20game%20designed%20for%20a%20tech%20portfolio%20thumbnail.%20The%20scene%20features%20a%20futuristic%20table%20with%20players%20ho.webp",
    url: "https://github.com/KhushiiShetty/GoFish-in-C-with-UNIX.git"
  }

];

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    useEffect(() => {
        setPortfolio(mockPortfolioData);
    }, []);

    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={["P", "O","R","T","F","O","L","I","O"]}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <div class="spinner">
                <div class="spinner1"></div>
            </div>
            
        </>
    );
}

export default Portfolio;