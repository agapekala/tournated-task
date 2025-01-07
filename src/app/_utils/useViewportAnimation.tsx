import { useEffect } from "react";
import { useInView as useInViewIO } from "react-intersection-observer";

const useViewportAnimation = (
  wrapperId: string,
  handleEnterLeft: () => void,
  handleExitLeft: () => void
) => {
  const [ref, inView, entry] = useInViewIO({
    root: document.getElementById(wrapperId),
    rootMargin: "0px 0px 0px -20px",
    threshold: 0,
  });

  useEffect(() => {
    if (!entry) return;

    const { boundingClientRect, rootBounds } = entry;
    if (!rootBounds) return;

    if (inView && boundingClientRect.right > rootBounds.left) {
      handleEnterLeft();
    }

    if (!inView && boundingClientRect.left < rootBounds.left) {
      handleExitLeft();
    }
  }, [inView, entry, handleEnterLeft, handleExitLeft]);

  return { ref };
};

export default useViewportAnimation;
