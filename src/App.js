import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import MobileSection from "./components/MobileSection";
import ParticlesSection from "./components/ParticlesSection";
import WebSection from "./components/WebSection";

function App() {
  return (
    <Box overflowX="hidden">
      <Header />
      <ParticlesSection />

      <AboutSection />
      <WebSection />
      <MobileSection />

      <Box my={8} />
    </Box>
  );
}

export default App;
