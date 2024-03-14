import React from 'react'
import style from "../CSS/MatterHome.module.css"
import trans from '../Image/transport.webp'
import services1 from '../Image/sevices1.png'
import services2 from '../Image/services2.png'
import services3 from '../Image/services3.png'
import services4 from '../Image/services4.png'
import services5 from '../Image/services5.png'
import services6 from '../Image/services6.png'
import {PhoneIcon , EmailIcon} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'


export const MatterHome = () => {
  const navigate = useNavigate()

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
           <div  className={style.logContImg} >
           <img src={trans} alt="err" />
           </div>
          </div>

          <div className={style.headings}>
         <p className={style.title}>SERVICES</p>
          <hr  />
         </div>
         <div className={style.servicesDIV}>
          <div onClick={() => handleServiceClick('WATER FREIGHT AND FORWARDING SERVICES')}>
              <img src={services1} alt="err" />
        <p>OCEAN FREIGHT</p>
      </div>
      <div  onClick={()=>handleServiceClick('AIR FREIGHT AND FORWARDING SERVICES')}>
      <img src={services2} alt="err" />
      <p>AIR FREIGHT</p>
      </div>
      <div onClick={()=>handleServiceClick('LAND AND RAIL TRANSPORT')}>      
          <img src={services3} alt="err" />
          <p style={{marginTop:"-15px"}}>LAND AND RAIL</p>
      </div>
      <div onClick={()=>handleServiceClick('WAREHOUSING SERVICES')}>     
           <img src={services4} alt="err" />
           <p>WAREHOUSE</p>
       </div>
       <div onClick={()=>handleServiceClick('PORT HANDLING SERVICES')}>     
           <img src={services5} alt="err" />
           <p >PORT HANDLING</p>
       </div>
      <div onClick={() => handleServiceClick('WATER FREIGHT AND FORWARDING SERVICES')}>    
            <img src={services6} alt="err" />
            <p>SEA FREIGHT</p>
       </div>
    </div>
    <div className={style.headings}>
         <p className={style.title}>CONTACT US!</p>
          <hr  />

         <div className={style.contact}>
         <div>
          For any inquiries, email us at:
          <Link to={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
            <div  style={{ display: 'flex', alignItems: 'center' , justifyContent:"center" }}>
            <EmailIcon color='rgb(50, 90, 139)' style={{ marginRight: '8px',marginTop:"5px"}} />
             <span className={style.email} >nawal@detailfreight.com</span>
            </div>
            </Link> 
        </div>
          <div style={{ display: 'flex', alignItems: 'center' , justifyContent:"center" }}>
            <PhoneIcon color='rgb(50, 90, 139)'  style={{ marginRight: '8px' }} />
            <span>+91 7011224374</span>
        </div>
         </div>
         </div>
    </div>
  )
}
