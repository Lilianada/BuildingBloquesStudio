import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import BackToTop from '../components/BackToTop'
import Team from '../components/Team'
import { Services } from '../components/Services'
import Templates from '../components/Templates'
import Projects from '../components/Projects'
import Pricing from '../components/Pricing'


export default function Home() {
  const scrollContainer = useRef(null);

  useEffect(() => {
    // Initialize smooth scrollbar
    const scrollbar = Scrollbar.init(scrollContainer.current, {
      damping: 0.1, // Smoothness of the scrolling
      thumbMinSize: 20,
    });

    return () => {
      // Destroy scrollbar on cleanup
      scrollbar.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      ref={scrollContainer}
      style={{ height: "100vh", overflow: "hidden" }}
    >
        <Hero />
        <Services />
        <Projects />
        <Pricing />
        <Templates />
        <Team />
        <CallToAction />
        <Footer />
        <BackToTop />
    </motion.div>
  );
}