import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsap_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            {/* <img src={footer_logo} alt="" /> */}
            <p>BasicChic</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-conttiner">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-conttiner">
                <img src={pintrest_icon} alt="" />
            </div>
            <div className="footer-icons-conttiner">
                <img src={whatsap_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer