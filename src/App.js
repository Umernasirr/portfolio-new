import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import MobileSection from "./components/MobileSection";
import ParticlesSection from "./components/ParticlesSection";
import ContactSection from "./components/ContactSection";
import WebSection from "./components/WebSection";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const webRef = useRef(null);
  const mobileRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToView = (scrollToRef) => {
    console.log(scrollToRef);
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box overflowX="hidden">
      <Header
        aboutRef={aboutRef}
        webRef={webRef}
        mobileRef={mobileRef}
        contactRef={contactRef}
        scrollToView={scrollToView}
      />
      <ParticlesSection />
      <AboutSection reference={aboutRef} />
      <WebSection reference={webRef} />
      <MobileSection reference={mobileRef} />
      <ContactSection reference={contactRef} />
      <Box my={8} />
    </Box>
  );
}

export default App;
