import {  Image } from '@chakra-ui/react';
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '../CSS/Navbar.module.css'
import img1 from '../Image/img1.png'
import img2 from '../Image/img2.jpg'
import img3 from '../Image/img3.png'
import img4 from '../Image/imgs4.png'
 
export const SliderComponent = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div style={{ height:"500px"}}>
     <Slider {...settings} className={style.sliders}>
       
    <Image
      src={img1}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='20px'
      borderTopRightRadius="20px"
      borderBottomLeftRadius='20px'
      borderBottomRightRadius="20px"
      height={'500px'}
      width={'90%'} 
    />
     <Image
      src={img2}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='20px'
      borderTopRightRadius="20px"
      borderBottomLeftRadius='20px'
      borderBottomRightRadius="20px"
      width={'100%'}
      height={'500px'}
    />
     <Image
      src={img3}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='20px'
      borderTopRightRadius="20px"
      borderBottomLeftRadius='20px'
      borderBottomRightRadius="20px"
      width={'100%'}
      height={'500px'}
    />
     <Image
      src={img4}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='20px'
      borderTopRightRadius="20px"
      borderBottomLeftRadius='20px'
      borderBottomRightRadius="20px"
      width={'100%'}
      height={'500px'}
      
    />
       
      </Slider> 
    </div>
  )
}