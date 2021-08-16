import React from "react";
import { Box, Flex, Text, Image, Button, Icon } from "@chakra-ui/react";
import Particles from "react-particles-js";
import { AiOutlineDown } from "react-icons/all";
import { motion } from "framer-motion";

const ParticlesSection = () => {
  const MotionBox = motion(Box);

  return (
    <Box bg="gray.900" h="100vh">
      <Particles
        height="100vh"
        params={{
          particles: {
            number: {
              value: 240,
              density: {
                enable: true,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 2,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <Flex
        pos="absolute"
        top="0"
        left="0"
        h="100vh"
        w="full"
        align="center"
        justify="center"
        direction="column"
        mt={12}
      >
        <Text
          fontSize={{ base: "4xl", md: "8xl" }}
          color="white"
          textAlign="center"
          fontFamily="Josefin Sans"
          fontWeight="light"
          lineHeight="1"
        >
          Umer Nasir
        </Text>

        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color="white"
          textAlign="center"
          fontWeight="light"
        >
          A Full Stack Developer
        </Text>

        <MotionBox
          onClick={() => console.log("HEY")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          my={4}
        >
          <Image src="/images/computer.png" w="160px" h="160px" />
        </MotionBox>
        <Flex width={{ base: "60%", lg: "32%" }} mt={4}>
          <Text fontSize="xl" textAlign="left" color="brand.100">
            Welcome To My Portfolio!
          </Text>
        </Flex>

        <Flex width={{ base: "60%", lg: "32%" }} mt={4}>
          <Text fontSize="lg" textAlign="justify" color="brand.400">
            I’m a Web developer and a Mobile developer with 3+ years of
            Experience in Development and a Degree in Computer Science!!
          </Text>
        </Flex>

        <Button
          mt={8}
          variant="outline"
          color="brand.100"
          _hover={{
            color: "secondary.200",
            borderColor: "secondary.200",
          }}
          _active={{}}
          rightIcon={<Icon as={AiOutlineDown} />}
        >
          View my Work
        </Button>
      </Flex>
    </Box>
  );
};

export default ParticlesSection;
