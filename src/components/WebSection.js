import { Box, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Particles from "react-particles-js";
import ProjectItem from "./ProjectItem";
import ProjectModal from "./ProjectModal";

import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const MotionFlex = motion(Flex);

const WebSection = ({ reference }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <Flex
      ref={reference}
      h="100vh"
      w="100vw"
      bg="brand.900"
      align="center"
      direction="column"
    >
      <Particles
        height="100vh"
        width="100vw"
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 0.001,
                size_min: 0.1,
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

      <Box pos="absolute" mt={8} w={{ base: "90%", lg: "60%" }}>
        <Text
          borderBottomWidth={4}
          borderBottomColor="brand.400"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          fontFamily="Josefin Sans"
          color="brand.100"
          textAlign="center"
        >
          Web Development Projects
        </Text>

        <SimpleGrid columns={[2, 2, 3, 3]} py={8} spacingY={2} spacingX={4}>
          <ProjectItem
            setSelectedProject={setSelectedProject}
            setShowModal={setShowModal}
            title="Meditate With Me!"
            imageSrc="/images/meditation-app.png"
          />
          <ProjectItem
            setSelectedProject={setSelectedProject}
            setShowModal={setShowModal}
            title="Meditate With Me!"
            imageSrc="/images/meditation-app.png"
          />
          <ProjectItem
            title="Meditate With Me!"
            imageSrc="/images/meditation-app.png"
          />
          <ProjectItem
            title="Meditate With Me!"
            imageSrc="/images/meditation-app.png"
          />
          <ProjectItem
            title="Meditate With Me!"
            imageSrc="/images/meditation-app.png"
          />
          <ProjectItem
            title="Meditate With Me!"
            imageSrc="/images/meditation-app.png"
          />
          <ProjectItem
            title="Meditate With Me!"
            imageSrc="/images/meditation-app.png"
          />
          <ProjectItem
            title="Meditate With Me!"
            imageSrc="/images/meditation-app.png"
          />
        </SimpleGrid>

        <Flex justify="center">
          <Text
            textAlign={{ base: "center", md: "left" }}
            color="brand.100"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="semibold"
            fontFamily="Josefin Sans"
          >
            Developing Web Applications for your Ventures
          </Text>
        </Flex>

        <Flex direction="column" color="brand.100" align="center" mt={4}>
          <MotionFlex
            whileHover={{ scale: 1.03 }}
            align="center"
            borderWidth={3}
            px={4}
            py={2}
            borderRadius={8}
            cursor="pointer"
            _hover={{
              color: "brand.200",
              borderColor: "brand.200",
            }}
          >
            <Text fontSize="lg">View More</Text>
            <Box m={1} />
            <Icon as={AiOutlineArrowRight} fontSize="md" />
          </MotionFlex>
        </Flex>
      </Box>

      <ProjectModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedProject={selectedProject}
      />
    </Flex>
  );
};

export default WebSection;
