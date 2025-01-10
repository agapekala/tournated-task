import { useState, useEffect } from "react";

const useViewportWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    updateScreenWidth();

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return screenWidth;
};

export default useViewportWidth;
