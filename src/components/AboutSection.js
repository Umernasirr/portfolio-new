import {
  Flex,
  Text,
  Box,
  Button,
  SimpleGrid,
  Image,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { CgAsterisk } from "react-icons/cg";

const MotionBox = motion(Box);

const AboutSection = ({ reference }) => {
  return (
    <Flex
      ref={reference}
      h="100vh"
      w="100vw"
      bg="gray.50"
      align="center"
      direction="column"
      bgGradient="linear(to-r, white, gray.200)"
    >
      <Box mt={8} w={{ base: "80%", lg: "40%" }}>
        <Text
          borderBottomWidth={4}
          borderBottomColor="brand.400"
          fontSize={{ base: "2xl", lg: "4xl" }}
          fontWeight="bold"
          fontFamily="Josefin Sans"
        >
          About Me
        </Text>

        <Box my={{ base: 4, lg: 8 }} />

        <Text textAlign="justify">
          I'm a Computer Science Graduate from SZABIST (Karachi, Pakistan) with
          3+ years of experience in development. I started Freelancing in Web
          Development, Web Design and slowly transitioned to working on Machine
          Learning problems. I have been participating in Kaggle competitions
          for the past year working on real world problems. With experience
          spanning data science and engineering, I have a broad set of skills
          that enable me to cover the entire analysis process along with a
          passion to achieve more.
        </Text>
      </Box>

      <Box mt={8} w={{ base: "80%", lg: "40%" }}>
        <Text
          borderBottomWidth={4}
          borderBottomColor="brand.400"
          fontSize={{ base: "2xl", lg: "4xl" }}
          fontWeight="bold"
          fontFamily="Josefin Sans"
        >
          My Skills
        </Text>
        <Box my={{ base: 4, lg: 8 }} />

        <SimpleGrid columns={[1, 1, 2, 2]} spacingX={4} spacingY={2}>
          <SkillButton title="Frontend Developer" />
          <SkillButton title="Backend Developer" />
          <SkillButton title="Mobile App Developer" />
          <SkillButton title="UI/UX Designer" />
          <SkillButton title="Data Scientist" />
          <SkillButton title="Frontend Developer" />
        </SimpleGrid>
      </Box>

      <Box my={{ base: 4, lg: 8 }} />

      <Stack
        display={{ base: "none", lg: "flex" }}
        direction="row"
        justifyContent="center"
        w="full"
        spacing={8}
      >
        <SkillImage
          width="48px"
          height="40px"
          imageSrc="/images/react.png"
          label="React Js"
        />
        <SkillImage
          width="54px"
          height="40px"
          imageSrc="/images/node.png"
          label="Node Js"
        />
        <SkillImage
          width="48px"
          height="40px"
          imageSrc="/images/javascript.png"
          label="Javascript"
        />
        <SkillImage
          width="48px"
          height="40px"
          imageSrc="/images/typescript.png"
          label="Typescript"
        />
        <SkillImage
          width="44px"
          height="40px"
          imageSrc="/images/react-native.png"
          label="React Native"
        />
        <SkillImage
          width="48px"
          height="40px"
          imageSrc="/images/flutter.png"
          label="Flutter"
        />
        <SkillImage
          width="120px"
          height="40px"
          imageSrc="/images/mongo.png"
          label="Mongo DB"
        />
        <SkillImage
          width="120px"
          height="40px"
          imageSrc="/images/graphql.png"
          label="Graph QL"
        />
      </Stack>
    </Flex>
  );
};

const SkillButton = ({ title }) => (
  <Box
    p={2}
    cursor="pointer"
    borderBottomWidth={3}
    borderBottomColor="transparent"
    borderRadius={0}
    _hover={{ color: "brand.400", borderBottomColor: "brand.400" }}
    _active={{ borderBottomColor: "brand.800", color: "brand.800" }}
  >
    <Text textAlign={{ base: "left", lg: "center" }} fontWeight="light">
      {title}
    </Text>
  </Box>
);

const SkillImage = ({ imageSrc, label, width, height }) => (
  <Tooltip label={label} aria-label="A tooltip">
    <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} p={2}>
      <Image
        _hover={{ filter: "grayscale(0%)", borderBottomColor: "brand.400" }}
        filter="grayscale(100%)"
        h={height}
        w={width}
        src={imageSrc}
      />
    </MotionBox>
  </Tooltip>
);

export default AboutSection;
