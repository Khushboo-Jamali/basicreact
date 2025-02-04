// import  from "./Header"; 
import React from 'react'



export default function Header(props) {
    console.log(props.children); // Correct way to log children
  
    return (
      <header>
        <div id="top-header">
          <div id="logo">
            <img src="./logo192.png" alt="Logo" />
            <h3>{props.headerInfo.name} {props.headerInfo.lastname}</h3>
            {/* <h3>{props.children} {props.headerInfo.name} {props.headerInfo.lastname}</h3> */}
          </div>
  
          <nav>
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Products</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
  
        <div id="header-image-menu"></div>
      </header>
    );
  }
  
