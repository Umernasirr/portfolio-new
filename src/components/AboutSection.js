import { Flex, Text, Box } from "@chakra-ui/react";

import React from "react";

const AboutSection = () => {
  return (
    <Flex h="100vh" w="100vw" bg="gray.50" align="center" direction="column">
      <Box mt={8} w="40%">
        <Text
          borderBottomWidth={4}
          borderBottomColor="brand.400"
          fontSize="4xl"
          fontWeight="bold"
          fontFamily="Josefin Sans"
        >
          About Me
        </Text>

        <Box my={8} />

        <Text textAlign="justify">
          I'm a Computer Science Graduate from SZABIST (Karachi, Pakistan) with
          . I started Freelancing in Web Development, Web Design and slowly
          transitioned to working on Machine Learning problems. I have been
          participating in Kaggle competitions for the past year working on real
          world problems. With experience spanning data science and engineering,
          I have a broad set of skills that enable me to cover the entire
          analysis process along with a passion to achieve more.
        </Text>
      </Box>

      <Box mt={8} w="40%">
        <Text
          borderBottomWidth={4}
          borderBottomColor="brand.400"
          fontSize="4xl"
          fontWeight="bold"
          fontFamily="Josefin Sans"
        >
          My Skills
        </Text>

        <Box my={8} />

        <Text textAlign="justify">
          I'm a Computer Science Graduate from SZABIST (Karachi, Pakistan) with
          . I started Freelancing in Web Development, Web Design and slowly
          transitioned to working on Machine Learning problems. I have been
          participating in Kaggle competitions for the past year working on real
          world problems. With experience spanning data science and engineering,
          I have a broad set of skills that enable me to cover the entire
          analysis process along with a passion to achieve more.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutSection;
