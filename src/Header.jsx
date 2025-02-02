import React from 'react'

export default function Header() {
  return (
    <header>

    <div id="top-header">
     
        <div id="logo">
            
            <img src="./logo192.png" />
          <h3>  React Nav</h3>
        </div>
      
        <nav >
            <ul>
                <li class="active">
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
  
    <div id="header-image-menu">
    </div>
</header>
    // <div className="header">
    // <h1 style={{backgroundColor:'black ' ,color:'plum',marginTop:'-10px',padding:'10px 10px' ,borderRadius:'10px'}} >Welcome to header section</h1>  

    // </div>
)
}
