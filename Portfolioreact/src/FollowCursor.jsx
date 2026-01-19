import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function FollowCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  //  Bahut late movement
  const x = useSpring(mouseX, {
    stiffness: 30000,  // bahut kam
    damping: 1000,    // thoda loose
  });

  const y = useSpring(mouseY, {
    stiffness: 30000,
    damping: 1000,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 5);
      mouseY.set(e.clientY - 5);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <motion.div className="cursor-ball" style={{ x, y }} />;
}
