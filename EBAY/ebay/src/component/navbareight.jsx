import React from 'react';
import './navbareight.css'
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import Picker from 'emoji-picker-react';
import EmojiPicker from 'emoji-picker-react';

const NavbarEight = () => {
  return (
    <footer className='footer'>
      
      <div className='footer-div'>
        <div className='footerDiv-divOne'>
                    <p><b>Buy</b></p>
                    <ul>
                      <li><a href="">Registration</a></li>
                      <li><a href="">eBay Money Back Guarantee</a></li>
                      <li><a href="">Bidding & buying help</a></li>
                      <li><a href="">Stores</a></li>
                    </ul>
        </div>
        <div className='footerDiv-divTwo'>
                  <div className="footer-Two-div-one">
                            <p><b>Sell</b></p>
                            <ul>
                                <li><a href="">Start Selling</a></li>
                                <li><a href="">Learn to sell</a></li>
                                <li><a href="">Affiliates</a></li>
                            </ul>
                  </div>
                  <div className="footer-Two-div-two">
                          <p><b>Tools & apps</b></p>
                          <ul>
                            <li><a href="">Developers</a></li>
                            <li><a href="">Security center</a></li>
                            <li><a href="">Site map</a></li>
                          </ul>
                  </div>
        </div>
        <div  className='footerDiv-divThree'>
                 <div className='footer-Three-div-one'>
                  <p><b>Stay connected</b></p>
                  <ul>
                    <li><a href="">eBay's Blogs</a></li>
                    <li><a href=""><RiFacebookBoxFill  className='icons'/><span>Facebook</span></a></li>
                    <li><a href=""><FaTwitterSquare  className='icons'/><span>Twitter</span></a></li>
                  </ul>
                 </div>

        </div>

        <div  className='footerDiv-divFour'>
                  <div className="footer-Four-div-one">
                    <p><b>About ebay</b></p>
                    <ul>
                      <li><a href="">Company info</a></li>
                      <li><a href="">News</a></li>
                      <li><a href="">Investors</a></li>
                      <li><a href="">Careers</a></li>
                      <li><a href="">Government relations</a></li>
                      <li><a href="">Advertise with us</a></li>
                      <li><a href="">Policies</a></li>
                      <li><a href="">Verified Rights Owner(VeRO)Program</a></li>
                      <li><a href=""></a></li>
                    </ul>
                  </div>
        </div>

        <div  className='footerDiv-divFive'>
              <div className="footer-Five-div-one">
                <p><b>Help & Contact</b></p>
                <ul>
                  <li><a href="">Seller Information Center</a></li>
                  <li><a href="">Contact us</a></li>
                 
                  
                </ul>
              </div>

              <div className="footer-Five-div-two">
                <p><b>Community</b></p>
                <ul>
                  <li><a href="">Announcements</a></li>
                  <li><a href="">Discussions boards</a></li>
                  <li><a href="">ebay Giving works</a></li>
                </ul>
              </div>

              <div className="footer-Five-div-three">
                <p><b>eBay Sites</b></p>
                <ul>
                  <li>{}</li>
                </ul>
              </div>
        </div>

      </div>

     

    </footer>
  )
}

export default NavbarEight;
