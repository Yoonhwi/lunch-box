"use client";

import { useContext, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";

function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen || !context) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname() || "initial";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
