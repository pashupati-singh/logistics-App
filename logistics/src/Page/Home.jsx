
import React, { useEffect } from 'react'
import { SliderComponent } from './Slider'
import style from '../CSS/Services.module.css'
import { MatterHome } from './MatterHome'

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the document to the top
  }, []);
  return (
    <div>
      <SliderComponent />
     <MatterHome />
    </div>
  )
}
