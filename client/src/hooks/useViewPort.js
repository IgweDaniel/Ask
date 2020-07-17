import React from "react";

export function useViewport() {
  const [width, setWidth] = React.useState(0);

  function handleWindowResize() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}
