import React from 'react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'plum', color: '#000', padding: '20px 0' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      
      {/* Contact Form */}
      <div style={{ flex: 1, maxWidth: '400px' }}>
        <h3 style={{ color: 'black' }}>Contact Us</h3>
        <form  style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            name="name"
                        placeholder="Your Name"
          
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '4px', border: 'none' }}
          />
          <input
            type="email"
            name="email"
            
            placeholder="Your Email"
          
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '4px', border: 'none' }}
          />
          <textarea
            name="message"
          
            placeholder="Your Message"
            rows="4"
            
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '4px', border: 'none' }}
          />
          <button
            type="submit"
            style={{ padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Links */}
      <div style={{ flex: 1, maxWidth: '400px' }}>
        <h3 style={{ color: 'black' }}>Quick Links</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="#home" style={{ color: 'black', textDecoration: 'none', marginBottom: '10px', display: 'block' }}>Home</a></li>
          <li><a href="#about" style={{ color: 'black', textDecoration: 'none', marginBottom: '10px', display: 'block' }}>About Us</a></li>
          <li><a href="#services" style={{ color: 'black', textDecoration: 'none', marginBottom: '10px', display: 'block' }}>Services</a></li>
          <li><a href="#contact" style={{ color: 'black', textDecoration: 'none', marginBottom: '10px', display: 'block' }}>Contact</a></li>
          <li><a href="#privacy" style={{ color: 'black', textDecoration: 'none', marginBottom: '10px', display: 'block' }}>Privacy Policy</a></li>
        </ul>
        
        {/* Social Media Links */}
        <div style={{ marginTop: '20px' }}>
          <a href="#" style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Facebook</a>
          <a href="#" style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Twitter</a>
          <a href="#" style={{ color: 'black', marginRight: '10px', textDecoration: 'none' }}>Instagram</a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '14px' }}>&copy; 2025 Your Company Name. All Rights Reserved.</p>
    </div>
  </footer>
  )
}
