// import React, { useEffect, useState } from "react";
// import "./components.css";
// import bgImage from '../components/pics/Books1.jpeg';

// const slides = [
//   { color: "lightcoral", text: "Slide 1", image: slide1 },
//   { color: "lightblue", text: "Slide 2" , image: slide2 },
//   { color: "lightgreen", text: "Slide 3", image: slide3 },
// ];
// export default function Home() 
// {
// const [current, setCurrent] = useState(0);

//   // Automatic slide change every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (

//     <div
//       className="home-container"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",      // full page height
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >

  
//     <div className="slider-container">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`slide ${index === current ? "active" : ""}`}
//           style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//         >
//           {slide.text}
//         </div>
//       ))}

//       <div className="dots">
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             className={`dot ${index === current ? "active" : ""}`}
//             onClick={() => setCurrent(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//       </div>
//   );
// }



import React, { useEffect, useState } from "react";
import "./components.css";
import bgImage from "../components/pics/Books1.jpeg";
import slide1 from '../components/pics/Quiet Luxury Quote on Reading.jpg';
import slide2 from '../components/pics/The essence of reading books.jpg';
import slide3 from '../components/pics/download (15).jpg';


const slides = [
  { image: slide1, text: "Slide 1",color:"lightcoral" },
  { image: slide2, text: "Slide 2",color:"lightblue"  },
  { image: slide3, text: "Slide 3" ,color:"lightgreen" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="slide-text">{slide.text}</h2>
            <div className="slide-color" style={{ backgroundColor: slide.color }}></div>
          </div>
        ))}

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}