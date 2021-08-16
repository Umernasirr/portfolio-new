import { Box, Button, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const MotionButton = motion(Button);
const MotionImage = motion(Image);
const ContactSection = ({ reference }) => {
  return (
    <Flex
      ref={reference}
      h={{ base: "full", md: "100vh" }}
      w="100vw"
      bg="brand.100"
      align="center"
      pt={{ base: 0, md: 8 }}
      pb={{ base: 8, md: 0 }}
      direction="column"
      bgGradient="linear(to-r, white, gray.300)"
    >
      <Box mt={4} w={{ base: "80%", lg: "60%" }}>
        <Text
          borderBottomWidth={4}
          borderBottomColor="brand.400"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          fontFamily="Josefin Sans"
          color="brand.900"
          textAlign="center"
        >
          Contact
        </Text>

        <Box my={{ base: 4, md: 12 }} />

        <Stack
          spacing={8}
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
        >
          <Flex direction="column" align="center">
            <MotionImage
              whileHover={{ scale: 1.05 }}
              cursor="pointer"
              src="/images/github.png"
              boxSize={{ base: "80px", lg: "120px" }}
            />
            <Box my={2} />
            <MotionButton
              whileHover={{ scale: 1.05 }}
              _hover={{ color: "brand.800", borderColor: "brand.800" }}
              variant="outline"
              colorScheme="brand"
              fontSize="xl"
              fontWeight="semibold"
            >
              Visit my Github
            </MotionButton>
          </Flex>

          <Flex direction="column" align="center">
            <MotionImage
              whileHover={{ scale: 1.05 }}
              cursor="pointer"
              src="/images/projects.png"
              boxSize={{ base: "80px", lg: "120px" }}
            />
            <Box my={2} />
            <MotionButton
              _hover={{ color: "brand.800", borderColor: "brand.800" }}
              variant="outline"
              colorScheme="brand"
              fontSize="xl"
              fontWeight="semibold"
            >
              View my Work
            </MotionButton>
          </Flex>

          <Flex direction="column" align="center">
            <MotionImage
              whileHover={{ scale: 1.05 }}
              cursor="pointer"
              src="/images/linkedin.png"
              boxSize={{ base: "80px", lg: "120px" }}
            />
            <Box my={2} />
            <MotionButton
              _hover={{ color: "brand.800", borderColor: "brand.800" }}
              variant="outline"
              colorScheme="brand"
              fontSize="xl"
              fontWeight="semibold"
            >
              Visit my Linkedin
            </MotionButton>
          </Flex>
        </Stack>

        {/*  */}

        <Box my={8} />
        <Stack
          spacing={8}
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
        >
          <Flex direction="column" align="center">
            <MotionImage
              whileHover={{ scale: 1.05 }}
              cursor="pointer"
              src="/images/phone.png"
              boxSize={{ base: "80px", lg: "120px" }}
            />
            <Box my={2} />
            <MotionButton
              whileHover={{ scale: 1.05 }}
              _hover={{ color: "brand.800", borderColor: "brand.800" }}
              variant="outline"
              colorScheme="brand"
              fontSize="xl"
              fontWeight="semibold"
            >
              +92-332-2796289
            </MotionButton>
          </Flex>

          <Flex direction="column" align="center">
            <MotionImage
              whileHover={{ scale: 1.05 }}
              cursor="pointer"
              src="/images/email.png"
              boxSize={{ base: "80px", lg: "120px" }}
            />
            <Box my={2} />
            <MotionButton
              _hover={{ color: "brand.800", borderColor: "brand.800" }}
              variant="outline"
              colorScheme="brand"
              fontSize="xl"
              fontWeight="semibold"
            >
              umernasirr@gmail.com
            </MotionButton>
          </Flex>
        </Stack>

        <Box mt={{ base: 4, md: 12 }} boxShadow="md"></Box>
        <Flex
          cursor="pointer"
          direction="column"
          justify="center"
          align="center"
        >
          <Flex my={2} align="center">
            <MotionButton
              _hover={{
                color: "brand.100",
                bg: "brand.800",
              }}
              _active={{ bg: "brand.900" }}
              bg="brand.600"
              color="brand.100"
              h="60px"
              w="240px"
              fontSize="xl"
              fontWeight="semibold"
              rightIcon={
                <Icon
                  as={AiOutlineArrowRight}
                  fontSize="xl"
                  fontWeight="bold"
                />
              }
            >
              View my Resume
            </MotionButton>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ContactSection;
