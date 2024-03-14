// Contact.js
import React, { useEffect } from 'react';
import style from "../CSS/Contact.module.css";
import image from "../Image/contact1.png"
import img2 from "../Image/spoke.jpg"
import {PhoneIcon , EmailIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className={style.contactContainer}>
      <img src={image} alt="error" style={{width:"100%",borderRadius:"4px"}} />
      <div className={style.headings}>
        <div className={style.title}>Contact US</div>
        <hr />
      </div>
        <div className={style.person}>
          <h2><span>Y</span>our <span>S</span>pokesperson</h2>
          <div className={style.personContainer}>
          <div className={style.personsubContainer}>

            <img className={style.imgs} src={img2} alt="err" />
              
              <h3>Gunjan Soni</h3>

              <Link to={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
            <div  style={{ display: 'flex', alignItems: 'center' , justifyContent:"center",marginLeft:"15px" }}>
            <EmailIcon color='rgb(50, 90, 139)' style={{ marginRight: '8px',marginTop:"5px"}} />
             <span className={style.email} >gunjan@detailfreight.com</span>
            </div>
            </Link> 
            <div style={{ display: 'flex', alignItems: 'center' , justifyContent:"center",marginLeft:"-50px" }}>
            <PhoneIcon color='rgb(50, 90, 139)'  style={{ marginRight: '8px' , marginTop:"5px" }} />
            <span style={{marginTop:"5px"}}>+91 9891482525</span>
            </div>
            </div>
            <div className={style.personsubContainer} >
            <img className={style.imgs} src={img2} alt="err" />
              <h3>Nawal Kishor</h3>

              <Link to={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
            <div  style={{ display: 'flex', alignItems: 'center' , justifyContent:"center" }}>
            <EmailIcon color='rgb(50, 90, 139)' style={{ marginRight: '8px',marginTop:"5px"}} />
             <span className={style.email} >nawal@detailfreight.com</span>
            </div>
            </Link> 
            <div style={{ display: 'flex', alignItems: 'center' , justifyContent:"center",marginLeft:"-55px" }}>
            <PhoneIcon color='rgb(50, 90, 139)'  style={{ marginRight: '8px' }} />
            <span>+91 7011224374</span>
            </div>
            </div>
            </div>
      </div>
    </div>
  );
};
