import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Using a slight timeout helps override the browser's default scroll restoration
    // and ensures the DOM has fully rendered the new page before we attempt to scroll.
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
}