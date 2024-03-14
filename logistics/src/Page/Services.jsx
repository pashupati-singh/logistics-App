import React, { useEffect, useRef } from 'react'
import image from "../Image/services.jpg"
import style from "../CSS/Services.module.css"
import { useParams } from 'react-router-dom';

export const Services = () => {
  const { serviceName = "Default Service"  } = useParams();
  // const serviceRef = useRef(null);

  const waterServiceRef = useRef(null);
  const airServiceRef = useRef(null);
  const landServiceRef = useRef(null);
  const warehousingServiceRef = useRef(null);
  const portHandlingServiceRef = useRef(null);
  const cargoTransportServiceRef = useRef(null);

  useEffect(() => {
    const currentServiceRef = getServiceRef(serviceName);
    if (currentServiceRef && currentServiceRef.current) {
      currentServiceRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [serviceName]);

  const getServiceRef = (service) => {
    switch (service) {
      case "WATER FREIGHT AND FORWARDING SERVICES": return waterServiceRef;
      case "AIR FREIGHT AND FORWARDING SERVICES": return airServiceRef;
      case "LAND AND RAIL TRANSPORT": return landServiceRef;
      case "WAREHOUSING SERVICES": return warehousingServiceRef;
      case "PORT HANDLING SERVICES": return portHandlingServiceRef;
      case "CARGO TRANSPORT AND INSURANCE SERVICES": return cargoTransportServiceRef;
      default: return null;
    }
  };

  // useEffect(() => {
  //   const currentServiceRef = getServiceRef(serviceName);
  //   console.log(currentServiceRef);
  //   if (currentServiceRef) {
  //     console.log(currentServiceRef);
  //     currentServiceRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   } else {
  //     console.log(currentServiceRef);
  //     window.scrollTo(0, 0);
  //   }
  // }, [serviceName]);


  return (
    <div >
      <div>
      <img src={image} alt="" />
      </div>
 <div ref={waterServiceRef} className={style.logCont}>
         <div className={style.headings}>
         <p className={style.title}>{serviceName === "Default Service" ? 
  "WATER FREIGHT AND FORWARDING SERVICES" :
  (serviceName === "WATER FREIGHT AND FORWARDING SERVICES" ? 
    serviceName :
    "WATER FREIGHT AND FORWARDING SERVICES"
  )
}

</p>
          <hr style={{width:'700px'}} />
         </div>
      <div className={style.subtitle1}>
      
We provide very competitive rates on full container load FCL and LCL shipments from all major transit points around the globe. Even if your shipment is of somewhat smaller size, we also offer less than container load departures between all major transit points in the world. 
      </div>
  <div className={style.subtitle1}>
  With a comprehensive range of FCL & LCL services, we offer consolidation/Deconsolidation and back to back services as and when required. We have built an extensive network of agents that makes us able to provide secure, efficient and timely delivery of Cargo. The vast number of Import/Export ranges covered by us and the large volumes handled by us enable us to consolidate direct containers from specific locations which in turn enables us to control transit time and cost. We provide efficient Consolidation service to our Customers. The alacrity with which we work shows our ability to handle fragile and sensitive shipments. We have a committed network of integrated air and ground services that enables us to handle from pick up to prompt delivery. We offer a full line of dry containers, high cube containers, open top, flat racks, tanks, and refrigerated containers. Containers of all types - 20', 22', 40', closed and open top are handled via our trucking service. The services we offer in Consolidation include
  </div>

<div className={style.subtitle1}>
We have special pricing for FCL Booking customers. It is available at highly competitive pricing that is normally associated with implementing this type of facility – covering small and medium scale shippers.


</div>
      </div>
      <hr className={style.hr} />

         <div ref={airServiceRef} className={style.logCont}>
         <div className={style.headings}>
         <p className={style.title}>{serviceName === "Default Service" ? 
  "AIR FREIGHT AND FORWARDING SERVICES" :
  (serviceName === "AIR FREIGHT AND FORWARDING SERVICES" ? 
    serviceName :
    "AIR FREIGHT AND FORWARDING SERVICES"
  )
}</p>
          <hr style={{width:'600px'}} />
         </div>
      <div className={style.subtitle1}>
      In a competitive Era, We offer a comprehensive range of On Air freight . On volumetric consignments, you can also avail of discounted rates.  We provide efficient inward and outward consolidation service to Indian exporters and importers.  The alacrity with which we work shows our ability to handle fragile and sensitive shipments. We have a committed network of integrated air and ground services that enables us to handle from pick up to prompt delivery. 
      </div>
  <div className={style.subtitle1}>
  We cover many and varied destinations including those that are less frequented by other firms. Our client list includes the who's who of the corporate world.
  </div>

<div className={style.subtitle1}>
Our Major Focus in moving the shipment via Air freight is speedy delivery and less time consumption. We at Detail freight and forwarding Private limited  provide such service in an efficient and flawless manner without any hassle at any point of handling. The top quality services have brought smiles on our Customers' faces at all times.
</div>

<div className={style.subtitle1}>
Our Global network of professional Agents is familiar with the customs and regulations of their respective countries on both imports and exports. We can clear and deliver your shipments, anywhere in the world. We maintain communication and alerts within our system with each Agent to make sure the service requested is provided on time.
</div>
      </div>
      <hr className={style.hr} />
      <div ref={landServiceRef}  className={style.logCont}>
         <div className={style.headings}>
         <p className={style.title}>{serviceName === "Default Service" ? 
  "LAND AND RAIL TRANSPORT" :
  (serviceName === "LAND AND RAIL TRANSPORT" ? 
    serviceName :
    "LAND AND RAIL TRANSPORT"
  )
}</p>
       
          <hr style={{width:'400px'}} />
         </div>
      <div className={style.subtitle1}>
      We strive to extend standard services across vast distances and through rough terrain all across India. Our motivated staff and our expertise in the industry always keep us on schedule by rail and road. We provide relocation and movement of both bulk and containerized goods. We offer a variety of transport solutions, be it group age or other transport services such as part and full load shipments by road, railways or a combination of two.
      </div>
  <div className={style.subtitle1}>
  We offer Quality Container Trucking services as per the comfortability of our customers. We acquaint ourselves as one of the most trusted Container trucking service providers in Singapore. Our pricing is among the best in the industry. We offer safe, dry, and secure storage and transportation of containers from reaching to a wide classification of customers. We provide on time Containerized door to door services. We have our own fleet of containers and containerized vehicles. Our containers pass through the most stringent test before loading - like humidity check, leakage check, and floor check only after these tests a container in loaded and set for the road
  </div>
      </div>
      <hr className={style.hr} />

      <div ref={warehousingServiceRef}  className={style.logCont}>
         <div className={style.headings}>
         <p className={style.title}>{serviceName === "Default Service" ? 
  "WAREHOUSING SERVICES" :
  (serviceName === "WAREHOUSING SERVICES" ? 
    serviceName :
    "WAREHOUSING SERVICES"
  )
}</p>
         
          <hr style={{width:'400px'}} />
         </div>
      <div className={style.subtitle1}>
      Detail freight and forwarding private limited provides warehousing and distribution centers for companies with a need for a high-performance, yet flexible infrastructure. Through our shared logistics capabilities, our customers gain the benefits of our customized services. We offer real-time access to inventory status using a simple, intuitive method in managing your inventory.
      </div>
  <div className={style.subtitle1}>
  Our state of the art system includes bar code scanning, compliance labeling, space optimization and value-added support services. We offer a wide variety of warehousing, distribution, and value-added services designed to speed up your supply chain as efficiently and cost-effectively as possible. By utilizing our efficiencies and experience to reduce your total cost of Warehousing and Distribution, your company can focus its time and money on what really matters in your industry instead of wasting valuable resources on logistics.
  </div>

      </div>
      <hr className={style.hr} />

      <div ref={portHandlingServiceRef} className={style.logCont}>
         <div className={style.headings}>
         <p className={style.title}>{serviceName === "Default Service" ? 
  "PORT HANDLING SERVICES" :
  (serviceName === "PORT HANDLING SERVICES" ? 
    serviceName :
    "PORT HANDLING SERVICES"
  )
}</p>
          <hr style={{width:'400px'}} />
         </div>
      <div className={style.subtitle1}>
      Detail freight and forwarding pvt ltd  is capable of managing the total logistics solution for handling Project Cargo which requires experienced, dedicated and skilled personnel who are committed to resolve the problems professionally if arises in extraordinary circumstances and thus we have the sense of knowledge to 'make things happen'.
      </div>
  <div className={style.subtitle1}>

  We offer Project Cargo Services which include planning, port feasibility studies, conceptual design of port and other maritime transport projects, trade and traffic forecasts, financing strategies. For the execution of these services out of the box thinking is required in order to create and implement effective solutions.
  </div>

<div className={style.subtitle1}>

DFF consists of a team of highly experienced individuals who are well versed in all the aspects of Break-Bulk and Odd Dimensional Cargo (ODC) cargo. With tenacious stevedoring partners located in key transport hubs around the world, Galliard has close relationships with leading ship owners, operators, co-brokers throughout the world and are able to provide best possible space in vessels while dramatically reducing costs whilst providing reliable cargo transportation.
</div>
<hr className={style.hr} />
      </div>
      <div ref={cargoTransportServiceRef} className={style.logCont}>
         <div className={style.headings}>
         <p  className={style.title}>{serviceName === "Default Service" ? 
  "CARGO TRANSPORT AND INSURANCE SERVICES" :
  (serviceName === "CARGO TRANSPORT AND INSURANCE SERVICES" ? 
    serviceName :
    "CARGO TRANSPORT AND INSURANCE SERVICES"
  )
}</p>
          <hr style={{width:'670px'}} />
         </div>
      <div className={style.subtitle1}>
      
We also facilitate cargo insurance to our customers. There are Three Basic Policies (in the Old Cargo Clauses) Our Cargo Insurance services are rated amongst the best in the industry for we take care of your cargo's Insurance right from the port of discharge to the port of destination, covering aspects of natural calamities, Fire, theft, pilferage etc. In case of short landing or damages / pilferages detected after landing inside the port area, we arrange surveys of damages and assist our customers to file a claim with the insurance company, besides claiming duty remission, wherever applicable.
      </div>
  <div className={style.subtitle1}>
  
Similarly, if any damages or pilferages take place after customs clearance, on route in transit, from port to final destination, we will arrange for a survey at the unloading point and seek compensation from the insurance company for the loss suffered.
  </div>

<div className={style.subtitle1}>

All the survey and the claim formalities will be completed simultaneously so that either the declaration and clearance of cargo at port or consumption of the cargo after delivery does not suffer any abnormal delay.
</div>
<hr className={style.hr} />
      </div>
    </div>
  )
}