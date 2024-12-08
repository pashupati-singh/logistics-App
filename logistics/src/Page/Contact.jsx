import React, { useEffect } from 'react';
import style from "../CSS/Contact.module.css";
import image from "../Image/contact1.png"
import img2 from "../Image/spoke.png"
import {PhoneIcon , EmailIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

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
            <div className={style.personsubContainer} >
            <img className={style.imgs} src={img2} alt="err" />
              <h3>Gunjan Soni</h3>
              <div style={{ display: 'flex', alignItems: 'center' , justifyContent:"center",marginLeft:"-55px" }}>
            <PhoneIcon color='rgb(50, 90, 139)'  style={{ marginRight: '8px' }} />
            <span>+91 9891482525</span>
            </div>
              <Link to={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
            <div  style={{ display: 'flex', alignItems: 'center' , justifyContent:"center" , marginLeft:"10px"}}>
            <EmailIcon color='rgb(50, 90, 139)' style={{ marginRight: '8px',marginTop:"5px"}} />
             <span className={style.email} >gunjan@detailfreight.com</span>
            </div>
            </Link> 
            
            </div>
            </div>
      </div>
    </div>
  );
};
