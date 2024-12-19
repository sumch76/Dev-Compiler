import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Link } from "react-router-dom";
import Button2  from "../components/ui/button2"


export default function Home() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 2,
          ease: [0.4, 0.5, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Your all-in-one platform to code, save, share, and download effortlessly.{" "}
        <br />
        <Highlight className="text-black dark:text-white l">
          all in one powerful platform.
        </Highlight>
      </motion.h1>
      <div className="mt-10 flex justify-center">
        <Link to="/compiler">
          <Button2/> 
        </Link>
      </div>
    </HeroHighlight>
  );
}
