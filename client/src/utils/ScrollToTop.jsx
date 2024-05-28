import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/become_a_host/list-your-car') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return children;
};

export default ScrollToTop;
