import React from "react";

export function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin, threshold: 0.5 }
    );

    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) observer.unobserve(node);
    };
    // eslint-disable-next-line
  }, []);

  return isIntersecting;
}
