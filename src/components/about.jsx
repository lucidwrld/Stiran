import React from "react";
import "./about.css"
import video from "../assets/clothing.mp4"
import image from "../assets/logo.jpg"
import "@fontsource/pacifico";
import "@fontsource/signika";
export default function About() {
 return <div className="About">
  <div className="aboutt">
   <h1>What We Stand For?</h1>
   <video autoPlay loop={true} muted>
    <source src={video} type="video/mp4" />
    {/* Add additional <source> tags for other video formats if needed */}
    {/* Fallback content for browsers that don't support HTML5 video */}
    Your browser does not support the video tag.
   </video>
  </div>
  <div className="aboutt2">
   <img src={image} alt="logo" />
   <h2>Stiran Stands For and Strives To</h2>
   <p>Provide our customers the top best service. At Stiran, we are not just a company, we are a Family. We want our customers to always look good while providing affordable clothes within their budgets. Who are we? We are your hypemen, your stylist, your clothing store and your buddy.</p>
   <br />
   <p><b>We Have Got You Covered!!!</b></p>
   <br />
   <p>Experience the Excellence of Stiran: Unparalleled Quality Clothing for All Ages. Our fabrics boast exceptional durability and resistance to fading, ensuring long-lasting satisfaction. Enjoy our round-the-clock service, with deliveries available Monday to Saturday from 10am to 9pm. Exciting news: Stiran's shoe section is on the horizon! Stay tuned and anticipate the grand launch!
   </p>
  </div>
 </div>;
}