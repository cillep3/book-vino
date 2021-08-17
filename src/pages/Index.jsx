import React, { useState, useEffect } from "react";

// Import of components
import DesktopView from "./Desktopview/Index";
import MobileView from "./Mobileview/Index";

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const Index = () => {
  const [dimensions, setDimensions] = useState(windowDims());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDims());
    }; // end handleResize

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }; // END RETURN
  }, []); // END USEEFFECTS

  const breakpoint = 600;

  return dimensions.width < breakpoint ? <MobileView /> : <DesktopView />;
};

export default Index;
