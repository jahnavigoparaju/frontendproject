import "./components.css"
import pic from '../components/pics/Book Vibe Check.png';
import "./Login.js"
import { Link } from "react-router-dom"
import "./About.js"

export default function Navbarr() 
{
  return (
    //    <div>
    //    <nav>
    //     <b>
           
    //       <ul className="list">
    //         <li id="li7"><h1>Book Vibe Check</h1></li>
    //         <li id="li6"><img src={pic} className="image"></img></li>
    //         <li id='li1'><Link to="/">Home</Link></li>
    //         <li id='li2'><Link to="/About">About</Link></li>
    //         <li id='li3'><Link to="/Contact">Contact</Link></li>
    //         <li id='li4'><Link to="/Review">Review</Link></li>
    //         <li id='li5'><Link to="/Login">Login</Link></li>
    //     </ul> 

    //     </b>
        
    //    </nav>
    // </div>
    <nav>
      <ul className="list">
        <li id="li7">
          <h1>Book Vibe Check</h1>
        </li>

        <li id="li6">
          <img src={pic} alt="Book Vibe Check Logo" className="image" />
        </li>

        <li id="li1">
          <Link to="/Home">Home</Link>
        </li>

        <li id="li2">
          <Link to="/About">About</Link>
        </li>

        <li id="li3">
          <Link to="/Contact">Contact</Link>
        </li>

        <li id="li4">
          <Link to="/Review">Review</Link>
        </li>

        <li id="li5">
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
