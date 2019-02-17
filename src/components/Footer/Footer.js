import React from 'react';
import classes from './Footer.module.css';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

import SocialButton from '../SocialButton/SocialButton';

const Footer = ({ siteTitle }) => (
  <footer className={classes.Footer}>
    <SocialButton link='https://github.com/JasmineOuO/CritterSitter' icon={<FaGithub />} />  
    <SocialButton link='https://www.instagram.com/yumluv_214/' icon={<FaInstagram />} />   
    <SocialButton link='https://ca.linkedin.com/in/jasmine-ou' icon={<FaLinkedin />} />   
    <SocialButton link='https://www.facebook.com/jasmine.ou2' icon={<FaFacebook />} />      
    <br/>
    <div className={classes.Copyright}>&copy; 2018 Jasmine Ou</div>  
  </footer>
);

export default Footer;