import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import style from '../CSS/Navbar.module.css';
import Image from "../Image/Logo_page-0001.jpg";
import { useDisclosure } from '@chakra-ui/react';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
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

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <nav className={style.Nav}>
      <div className={style.NavImgDiv}>
        <img className={style.NavImg} src={Image} alt="error" onClick={() => navigate('/')} />
        {isSmallScreen?<p>DETAIL FREIGHT AND FORWARDING PVT. LTD.</p>:<p style={{fontSize:"20px"}}>DETAIL FREIGHT AND FORWARDING PVT. LTD.</p>}
      </div>
      
      {isSmallScreen ? (
        <>
          <Button ref={btnRef} variant='ghost' className={style.icon} onClick={onOpen}>
            <HamburgerIcon  />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            className={style.Drawer}
            size={'xs'}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <div className={style.HamburgerIcon}>
                <img width={'50px'} src={Image} alt="error" />
                <Link onClick={handleLinkClick} to={'/about'}>About</Link>
      <Link to={'/services'} onClick={handleLinkClick}>Services</Link>
      <Link to={'/contact'} onClick={handleLinkClick}>Contact</Link></div>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </>
      ):<div className={style.NavHeading}>
      <Link to={'/about'}>About</Link>
      <Link to={'/services'}>Services</Link>
      <Link to={'/contact'}>Contact</Link>
    </div>}
    </nav>
  );
};
