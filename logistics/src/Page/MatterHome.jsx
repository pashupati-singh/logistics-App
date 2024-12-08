import React, { useEffect, useState } from 'react'
import style from "../CSS/MatterHome.module.css"
import trans from '../Image/transport.webp'
import services1 from '../Image/sevices1.png'
import services2 from '../Image/services2.png'
import services3 from '../Image/services3.png'
import services4 from '../Image/services4.png'
import services5 from '../Image/services5.png'
import services6 from '../Image/services6.png'
import services7 from '../Image/services7.png'
import services8 from '../Image/services8.png'
import services9 from '../Image/services9.png'
import {PhoneIcon , EmailIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'


export const MatterHome = () => {
  const navigate = useNavigate()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]);
  const handleServiceClick = (service) => {
    navigate(`/services/${service}`);
  };
  return (
    <div>
         <div className={style.headings}>
         <p className={style.title}>LOGISTICS</p>
          <hr  />
          <p className={style.subtitle}>End-to-End Cargo Solutions</p>
         </div>
          <div className={style.logCont}>
            <p className={style.subtitle1}>With our East and West coast ports and terminals at its core, we’ve built an integrated network of world-class logistics services to provide businesses of all sizes better access to global markets. Our worldwide presence, seamless partnerships, and innovative technology work together to produce our exceptional service offerings, improving efficiency across the entire supply chain. Our multi-modal approach has reduced transit times, ensuring your cargo reaches its destination as quickly as possible while keeping your costs under control.</p>
          {isSmallScreen?"": <div  className={style.logContImg} >
           <img src={trans} alt="err" />
           </div>}
          </div>

          <div className={style.headings}>
         <p className={style.title}>SERVICES</p>
          <hr  />
         </div>
         <div className={style.servicesDIV}>
         <div onClick={() => handleServiceClick('WATER FREIGHT AND FORWARDING SERVICES')}>    
            <img src={services6} alt="err" />
            <p>SEA FREIGHT FORWARDING</p>
       </div>
      <div  onClick={()=>handleServiceClick('AIR FREIGHT AND FORWARDING SERVICES')}>
      <img src={services2} alt="err" />
      <p>AIR FREIGHT FORWARDING</p>
      </div>
      <div onClick={()=>handleServiceClick('LAND AND RAIL TRANSPORT')}>      
          <img src={services3} alt="err" />
          <p style={{marginTop:"-15px"}}>AIR,LAND AND RAIL</p>
      </div>
      <div onClick={()=>handleServiceClick('WAREHOUSING SERVICES')}>     
           <img src={services4} alt="err" />
           <p>WAREHOUSE</p>
       </div>
       <div onClick={()=>handleServiceClick('PORT HANDLING SERVICES')}>     
           <img src={services5} alt="err" />
           <p >PORT HANDLING</p>
       </div>
       <div onClick={()=>handleServiceClick('WATER FREIGHT AND FORWARDING SERVICES')}>     
           <img src={services7} alt="err" />
           <p style={{marginTop:'-20px'}}>DG HANDLING</p>
       </div>
       <div onClick={()=>handleServiceClick('WATER FREIGHT AND FORWARDING SERVICES')}>     
           <img style={{height:"50%"}} src={services8} alt="err" />
           <p style={{marginTop:'-20px'}} >ATA CARNET HANDLING</p>
       </div>
       <div onClick={()=>handleServiceClick('WATER FREIGHT AND FORWARDING SERVICES')}>     
           <img style={{height:"50%"}} src={services9} alt="err" />
           <p style={{marginTop:'-20px'}}>CUSTOM CLEARANCE</p>
       </div>
    </div>
    <div className={style.headings}>
         <p className={style.title}>CONTACT US!</p>
          <hr  />

         <div className={style.contact}>
         <div>
          For any inquiries, email us at:
          <Link  to={'https://mail.google.com/mail/u/0/#inbox?compose=new'}
        target="_blank"
        rel="noopener noreferrer">
            <div  style={{ display: 'flex', alignItems: 'center' , justifyContent:"center" }}>
            <EmailIcon color='rgb(50, 90, 139)' style={{ marginRight: '8px',marginTop:"5px"}} />
             <span className={style.email}>gunjan@detailfreight.com</span>
            </div>
            </Link> 
        </div>
          <div style={{ display: 'flex', alignItems: 'center' , justifyContent:"center" }}>
            <PhoneIcon color='rgb(50, 90, 139)'  style={{ marginRight: '8px' }} />
            <span>+91 9891482525</span>
        </div>
         </div>
         </div>
    </div>
  )
}
