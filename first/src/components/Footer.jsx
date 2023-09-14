import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the Bootstrap Icons CSS

function Footer() {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-3">
      <footer className="Footer d-flex flex-column align-items-center" style={{ width: '492px', height: '145.43px' }}>
        <div className="Social d-flex justify-content-center align-items-center gap-3">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
        </div>
        <div className="Links d-flex justify-content-center align-items-center gap-3">
          <div className="ConditionsOfUse" style={{ color: '#111827', fontSize: '18px', fontFamily: 'DM Sans', fontWeight: 700, wordWrap: 'break-word' }}>Conditions of Use</div>
          <div className="PrivacyPolicy" style={{ color: '#111827', fontSize: '18px', fontFamily: 'DM Sans', fontWeight: 700, wordWrap: 'break-word' }}>Privacy & Policy</div>
          <div className="PressRoom" style={{ color: '#111827', fontSize: '18px', fontFamily: 'DM Sans', fontWeight: 700, wordWrap: 'break-word' }}>Press Room</div>
        </div>
        <div className="text-muted text-center">© {new Date().getFullYear()} MovieBox by Adriana Eka Prayudha</div>
      </footer>
    </div>
  );
}

export default Footer;
