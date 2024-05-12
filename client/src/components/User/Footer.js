import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { GrYoutube } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <>
         <div className="Main_page-bottomNav">
            <h2>Truckistan</h2>
            <ul className='nav_item-list'>
               <li><a href='#'>Home</a></li>
               <li><a href="https://okcredit.in/blog/how-does-transportation-industry-work/" target="_blank">About</a></li>
               {/* <li><Link to="/book">About</Link></li> */}
               <li><a href="https://youtube.com/@PlayWithTechnologyOfficial?si=ggVc45R2Fse0zno_" target="_blank">Experience</a></li>
               <li><Link to="/help">Contact</Link></li>
            </ul>

            <div className='footer_socials_MainPage'>
               <a href="https://www.linkedin.com/in/vivek-kumar-989875215/" target="_blank"><BsLinkedin /></a>
               <a href="https://instagram.com/play_with_technology?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><FiInstagram /></a>
               <a href="https://youtube.com/@PlayWithTechnologyOfficial?si=ggVc45R2Fse0zno_" target="_blank"><GrYoutube /></a>
               <a href="https://youtube.com/@PlayWithTechnologyOfficial?si=ggVc45R2Fse0zno_" target="_blank"><FaTwitter/></a>
            </div>
            <div className="line"></div>

            <div className='footer_copyright_MainPage'>
               <small>&copy; Truckistan. ALL rights reserved</small>
            </div>
         </div>
    </>
  )
}

export default BottomNav
