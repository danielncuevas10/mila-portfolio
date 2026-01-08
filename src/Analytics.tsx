import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag && import.meta.env.VITE_GA_ID) {
      window.gtag("config", import.meta.env.VITE_GA_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}
