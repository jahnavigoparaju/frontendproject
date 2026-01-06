import React from 'react';
import "./components.css";

export default function Login() 
{
  return (
    <div className="login-container">
        <center>
        <form >
        <table border="0" cellPadding="18" className='loginform1'>
    
    <tr>
      <td>First Name :</td>
      <td><input type="text" placeholder="Enter your name" id="fname" name="fname"/></td>
    </tr>

    <tr>
      <td>Last Name :</td>
      <td><input type="text" placeholder="Enter your name" id="lname" name="lname"/></td>
    </tr>

    <tr>
      <td>Email :</td>
      <td><input type="email" placeholder="Enter your email" id="email" name="email"/></td>
    </tr>

    <tr>
      <td>Gender :</td>
      <td>
        <input type="radio" name="gender"/> Male
        <input type="radio" name="gender"/> Female
      </td>
    </tr>

    
    <tr>
      <td>Country :</td>
      <td>
        <select name="country">
          <option>Select Country</option>
          <option>India</option>
          <option>USA</option>
        </select>
      </td>
    </tr>

    <tr>
      <td>User Name :</td>
      <td><input type="text" placeholder="select unique name" name="uname"/></td>
    </tr>

    <tr>
        <td>Password :</td>
        <td><input type="password"  id="password" name="password"/></td>
    </tr>

    <tr>
        <td>Confirm Password :</td>
        <td><input type="password"  id="cpassword" name="cpassword"/></td>
    </tr>

    <tr>
      <td></td>
      <td><button type="submit" name="submit">Submit</button></td>
    </tr>
    </table>
    </form>
        </center>
        
    </div>
  )
}
