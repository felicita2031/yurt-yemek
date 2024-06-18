import React,{memo} from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Yurt Yemek App. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">Hakkımızda</a></li>
          <li><a href="/contact">Bize Ulaşın</a></li>
          {/* <li><a href="/privacy">Privacy Policy</a></li> */}
        </ul>
      </div>
    </footer>
  );
};

export default memo(Footer);
