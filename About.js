import React from 'react'
import bgimg from './pics/Book Review.jpeg'
export default function About() 
{
    const containerstyle={
        backgroundColor:'lightblue',
        backgroundImage:`url('${bgimg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width:'1100px',
        height:'1000px',
        marginLeft:'350px',
        marginTop:'70px'
    };
    const h1style1={
      color:'#4D4B44',
      marginTop:'0px',
      paddingTop:'30px',
      marginLeft:'30px',
      marginRight:'30px'
      
    };
    const h2style1={
      color:'#4D4B44',
      paddingTop:'0px',
      marginLeft:'30px',
      marginRight:'30px' 
    };
    const h3style1={
      color:'white',
      paddingTop:'0px',
      marginLeft:'30px',
      marginRight:'30px' 
    };
    const heading={
      color:'coral',
      paddingTop:"30px",
      marginLeft:'60px',
      marginRight:'30px' 
    };
  return (
  
    <div className="about-container">
        {/* <h2 style={heading}>“Books let you travel without moving your feet.” — Jhumpa Lahiri</h2>
        <h3 style={h1style1}>This  Book Review Website is a digital platform designed to help readers explore, evaluate, and share opinions about books. It brings together a community of book lovers who can read reviews, rate books, and discover new titles across different genres. By providing honest user generated feedback, the website helps readers make informed decisions about what to read next.</h3> 
        <h3 style={h2style1}>The platform typically includes features such as book descriptions, summaries, ratings, detailed reviews, and personalized recommendations. Users can also contribute their own reviews, create reading lists, and engage in discussions with other readers. This interactive environment encourages reading habits, supports authors by giving visibility to their work, and builds a knowledge-sharing community.</h3> */}
        <h1 className="about-title">About Our Book Vibe Check</h1>

      <p className="about-text">
        The Book Vibe Check is an online platform designed for readers to
        explore, review, and rate books across various genres. It helps users
        discover new books and make informed reading choices through genuine
        user-generated reviews and ratings.
      </p>

      <h2 className="about-heading">Our Purpose</h2>
      <p className="about-text">
        The main purpose of this website is to promote reading culture and
        provide a trusted space where readers can share their opinions and
        experiences about books. It aims to save time for readers by offering
        honest and detailed reviews.
      </p>

      <h2 className="about-heading">Key Features</h2>
      <ul className="about-list">
        <li>Browse books by category and genre</li>
        <li>Read and write book reviews</li>
        <li>Rate books based on user experience</li>
        <li>Discover trending and popular books</li>
        <li>User-friendly and interactive interface</li>
      </ul>

      <h2 className="about-heading">Who Can Use This Platform?</h2>
      <p className="about-text">
        This platform is ideal for students, book lovers, casual readers, and
        anyone who enjoys reading. Authors can also benefit by gaining
        visibility and feedback for their work.
      </p>

      <h2 className="about-heading">Our Vision</h2>
      <p className="about-text">
        Our vision is to build a strong community of readers where knowledge,
        opinions, and love for books are shared freely, encouraging lifelong
        learning and reading habits.
      </p>
    </div>
  )
}
