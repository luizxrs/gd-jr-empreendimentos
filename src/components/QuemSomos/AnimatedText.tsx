import { motion } from "framer-motion";

interface IAnimatedText {
  text: string;
}

export default function AnimatedText({ text }: IAnimatedText) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stifness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stifness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-2xl md:text-5xl font-thin pointer-events-none text-center z-20 w-3/4 m-auto leading-snug"
      >
        {words.map((word, index) => (
          <motion.span variants={child} className="inline-block" key={index}>
            {word}&nbsp;{/* Use &nbsp; for space */}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}
