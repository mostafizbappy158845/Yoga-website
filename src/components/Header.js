import React, { useEffect, useState } from 'react';
import Nav from './Nav'
import NavMobile from './NavMobile'
import Logo from '../assets/img/logo.png'

const Header = () => {
  const [header, setHeader] = useState(false);

  return ( 
    <header className={`${header ? 'top-0' : 'top-9'} fixed bg-pink-200 w-full
     max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500`}>
      <div className="flex"></div>
    </header>
  );
};

export default Header;
