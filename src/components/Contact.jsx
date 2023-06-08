import React from "react";
import "./contact.css"
import "@fontsource/signika";
export default function Contact() {
 return <div className="contact">
  <div className="contactt">
   <h1 className="title">CONTACT US</h1>
   <p>Email: <a href="mailto:stiranClothing@stiran.com">stiranClothing@stiran.com</a> </p>
   <p>Phone: <a href="tel:+2349067690232">+2349067690232</a> </p>
   <p>LinkedIn: <a href="https://www.linkedin.com/in/stiranClothing">stiranClothing</a></p>
   <p>Twitter: <a href="https://www.twitter.com/stiranClothing">stiranClothing</a></p>
   <p>Instagram: <a href="https://www.instagram.com/stiranClothing">stiranClothing</a></p>
   <h2>Make Enquires?</h2>
   <form>
    <label>FULLNAME</label>
    <input type="text" placeholder="Enter Fullname"></input>
    <label>EMAIL</label>
    <input type="text" placeholder="Enter Email"></input>
    <label>PHONE NUMBER</label>
    <input type="text" placeholder="Enter Phone Number"></input>
    <label>Enquiry/Compliant</label>
    <textarea placeholder="I noticed ..."></textarea>
    <input className="submit" type="submit"></input>
   </form>
  </div>
 </div>;
}
