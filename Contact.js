import React from 'react'
// import pic from '../components/pics/socialapps.jpeg'
import { useState } from 'react';

export default function Contact() 
{

    const[formData,setFormData]=useState({
        name:"",
        email:"",
        message:"",
    });
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Thank you for reaching out!");
        setFormData({name:"",email:"",message:""});
    };
    return(
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>
                Have a book recommendation,review request or feedback?
                we'd love to hear from you?
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="your name" value={formData.name} onChange={handleChange} required/>
            <input type="email" name="email" placeholder="your email" value={formData.email} onChange={handleChange} required/>
            <textarea name="message" placeholder="your message or Book suggestion" rows="5" value={formData.message} onChange={handleChange} required/>
            <button type="submit">send Message</button>
            </form>
        </div>

    
//     const heading={
//         color:'coral',
//         paddingTop:'60px',
//     };
//     const container={
//        backgroundColor:'lightblue',
//         width:'900px',
//         height:'500px',
//         marginLeft:'350px',
//         marginTop:'70px',
//         // backgroundImage: `url(${pic})`,
//         // backgroundSize: '100% 100%',
//         // backgroundRepeat: "no-repeat",
//         // backgroundPosition: "center"
//     };
//     const details={
//         color:'#282727ff',
//         marginLeft:'200px',
//         marginTop:"40px",
//         paddingTop:'0px',
//         width:'500px',
//         height:'200px',
//         backgroundColor:'lightblue'
//     };
//   return (
//     <div style={container}>
//         <center>
//             <h1 style={heading}>Contact Details</h1>
//         </center>
//         <div style={details}>
//         <center>
//         <h3>Email ID: aarnawritings@gmail.com</h3>
//         <h3>Instagram ID: aarna_writings</h3>
//         <h3>Facebook ID : aarnawritings</h3>
//         <h3>Contact Number: 8341598867</h3>

//         </center>
        
//         </div>
        
//     </div>
  )
}
