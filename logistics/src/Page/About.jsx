import React, { useEffect } from 'react'
import style from "../CSS/About.module.css"
import image from '../Image/about.png'

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the document to the top
  }, []);
  return (
    <div className={style.headings}>
      <img src={image} alt="" />
      <div className={style.title}>About Our Company</div>
      <hr  />
      <div className={style.logCont}>
      
      <div className={style.subtitle1}>
      Detail Freight and Forwarding Pvt.Ltd (DFF) is a developing organization dealing in International Freight forwarding, including IMPORT and EXPORT, custom house broking, insurance services, port handling, project movement , inventory management and other logistical solutions. We provide customized deals to our clients keeping in the frame the time, cost and services at the acme of priorities. We have a team of dynamic professionals with a strong background in t0he logistics industry having experience of more than 10 years.
      </div>
  <div className={style.subtitle1}>
  The DFF's headquarter is located at New Delhi. We ascertain efficient handling and clearing of import and export cargo from the ICD's, CFS and all the airports and other parts of the country through our network. We also undertake bulk chartering of vessels at all major Indian ports.We have a well established network of agents across all the cities and at all the major ports of the world.
  </div>

<div className={style.subtitle1}>
  
We are having a global network of agents who all are handling the freight shipments through their local areas. They are familiar with local customs and regulations. They are reliable, and can be depended on to provide the highest level of service. Thus we are able to offer multi solutions to our clients. Before reaching the settlement of deals we organize planning sessions to ensure a safe and secured transit of consignments. Due to this reason we get success in providing 100% hassle free services to our customers almost all the time.
</div>

<div className={style.subtitle1}>
  
We handle bulk Drugs/Chemicals/Seafood and any other highly sensitive & perishable Export and Import Consignments, up to the satisfaction of the Consignee. Our team is fully conversant with the special handling procedures of the perishables and dangerous goods. "Our basic aim is to establish "DFF" as an international firm acquiring global Capabilities in the related fields and delivering world class service by maintaining the highest standards of quality professionalism & Integrity."
</div>
      </div>
    </div>
  )
}
