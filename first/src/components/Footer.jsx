import React from 'react';

function Footer() {
  return (
    <div className="container">
      <footer className="Footer d-flex flex-column align-items-center" style={{ width: '492px', height: '145.43px' }}>
        <div className="Social d-flex justify-content-start align-items-center gap-3">
          <div className="FaBrandsFacebookSquare">
            <div className="Vector" style={{ width: '24px', height: '24px', background: '#111827' }}></div>
          </div>
          <div className="FaBrandsInstagram">
            <div className="Vector" style={{ width: '24.01px', height: '24.01px', background: '#111827' }}></div>
          </div>
          <div className="FaBrandsTwitter">
            <div className="Vector" style={{ width: '24px', height: '24px', background: '#111827' }}></div>
          </div>
          <div className="FaBrandsYoutube">
            <div className="Vector" style={{ width: '22.76px', height: '16px', background: '#111827' }}></div>
          </div>
        </div>
        <div className="Links d-flex justify-content-start align-items-start gap-3">
          <div className="ConditionsOfUse" style={{ color: '#111827', fontSize: '18px', fontFamily: 'DM Sans', fontWeight: 700, wordWrap: 'break-word' }}>Conditions of Use</div>
          <div className="PrivacyPolicy" style={{ color: '#111827', fontSize: '18px', fontFamily: 'DM Sans', fontWeight: 700, wordWrap: 'break-word' }}>Privacy & Policy</div>
          <div className="PressRoom" style={{ color: '#111827', fontSize: '18px', fontFamily: 'DM Sans', fontWeight: 700, wordWrap: 'break-word' }}>Press Room</div>
        </div>
        <div className="text-muted">© 2021 MovieBox by Adriana Eka Prayudha</div>
      </footer>
    </div>
  );
}

export default Footer;
