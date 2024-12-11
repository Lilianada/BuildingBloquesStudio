import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import TemplatesHero from "../components/template/TemplatesHero";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import TemplatesSection from "../components/template/TemplatesSection";

const Template = () => {
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
    >
      <TemplatesHero />
      <section className="w-full">
        <TemplatesSection />
      </section>
      <CallToAction />
      <Footer />
      <BackToTop />
    </motion.div>
  );
};

export default Template;
