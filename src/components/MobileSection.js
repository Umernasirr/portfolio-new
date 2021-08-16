import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";

import { motion } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const MobileSection = ({ reference }) => {
  return (
    <Flex
      ref={reference}
      h="full"
      w="100vw"
      bg="brand.800"
      align="center"
      direction="column"
      pb={4}
    >
      <Box mt={8} w={{ base: "80%", lg: "60%" }}>
        <Text
          borderBottomWidth={4}
          borderBottomColor="brand.400"
          fontSize="4xl"
          fontWeight="bold"
          fontFamily="Josefin Sans"
          color="brand.100"
          textAlign="center"
        >
          Mobile Application Development
        </Text>

        <Flex
          my={8}
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", lg: "space-between" }}
          align="center"
        >
          <MotionBox
            whileHover={{ scale: 1.05 }}
            mx={{ base: 2, lg: 0 }}
            my={2}
          >
            <Image
              src="images/iphone_mockup1.png"
              h={{ base: "400px", lg: "480px" }}
            />
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.05 }}
            mx={{ base: 2, lg: 0 }}
            my={2}
          >
            <Image
              src="images/iphone_mockup2.png"
              h={{ base: "400px", lg: "480px" }}
            />
          </MotionBox>

          <MotionBox
            whileHover={{ scale: 1.05 }}
            mx={{ base: 2, lg: 0 }}
            my={2}
          >
            <Image
              src="images/iphone_mockup3.png"
              h={{ base: "400px", lg: "480px" }}
            />
          </MotionBox>
        </Flex>

        <Flex color="brand.100" justify="center" mt={4} mb={2}>
          <Text fontSize="3xl" fontFamily="Josefin Sans" fontWeight="semibold">
            Developing your Creative Ideas
          </Text>
        </Flex>

        <Flex direction="column" color="brand.100" align="center">
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
    </Flex>
  );
};

export default MobileSection;
