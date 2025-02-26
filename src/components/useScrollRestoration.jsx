


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react'

export const useScrollRestoration = () => {
  
    const { pathname } = useLocation();

    useEffect(() => {
      window.history.scrollRestoration = 'manual';
      const handleScroll = () => {
        window.scrollTo(0, 0);
      };
      handleScroll();
    }, [pathname]);
    
}
