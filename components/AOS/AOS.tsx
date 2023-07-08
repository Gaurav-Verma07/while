import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSContainer = ({ children }: any) => {
  useEffect(() => {
    AOS.init({
      // Customize AOS configuration here
      offset: 200,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 100,
      once: true,
      disable: 'mobile',
    });
  }, []);

  return <div>{children}</div>;
};

export default AOSContainer;
