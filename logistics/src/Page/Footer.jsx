import React from 'react'
import { Icon } from '@chakra-ui/react';
import img from '../Image/footers.png'
import style from "../CSS/Footer.module.css"
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div>
       <div> <img width={'100%'} src={img} alt="err" /></div>
       <div className={style.footerContainer}>
            <h2 className={style.footerTitle}>DETAIL FREIGHT AND FORWARDING PVT. LTD.</h2>
           <div className={style.footerIcons}>
           {/* <Icon as={FaFacebook} boxSize={10} color="blue.500" />
            <Icon as={FaLinkedin} boxSize={10} color="blue.500" /> */}
           </div>
           <div className={style.footerAddress}>
              <p>Plot No. 24, Sector-5</p>
              <p >Sainik Enclave, Uttam Nagar, Mohan Garden</p>
              <p >New Delhi 110059</p>
           </div>
           <p className={style.footerCopyRight}>Copyright © 2024 Freight And Forwarding Inc- All Rights Reserved.</p>
       </div>
    </div>
  )
}
