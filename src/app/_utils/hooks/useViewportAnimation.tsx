import { useEffect } from "react";
import { useInView as useInViewIO } from "react-intersection-observer";

const useViewportAnimation = (
  wrapperId: string,
  handleEnterLeft: () => void,
  handleExitLeft: () => void
) => {
  const [ref, inView, entry] = useInViewIO({
    root: document.getElementById(wrapperId),
    rootMargin: "0px 0px 0px -50px",
    threshold: 0,
  });

  useEffect(() => {
    if (!entry) return;

    const { boundingClientRect, rootBounds } = entry;
    if (!rootBounds) return;

    if (
      boundingClientRect.right > rootBounds.left &&
      boundingClientRect.right < rootBounds.right
    ) {
      handleEnterLeft();
    }

    if (!inView && boundingClientRect.left < rootBounds.left) {
      handleExitLeft();
    }
  }, [inView, entry, handleEnterLeft, handleExitLeft]);

  return { ref };
};

export default useViewportAnimation;
