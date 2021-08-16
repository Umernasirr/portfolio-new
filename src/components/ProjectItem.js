import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProjectItem = ({ title, imageSrc, setSelectedProject, setShowModal }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        setSelectedProject({
          title,
          imageSrc,
          desc: "This is a test Description",
        });
        setShowModal(true);
      }}
      cursor="pointer"
    >
      <Flex
        direction="column"
        align="center"
        p={1}
        borderColor={isHover ? "brand.400" : "transparent"}
        borderWidth={3}
        borderRadius={8}
      >
        <Image
          src={imageSrc}
          borderRadius={8}
          bg="brand.800"
          opacity={isHover ? 0.2 : 1}
        />

        {isHover && (
          <Box mt={8} pos="absolute" textAlign="center">
            <Text color="white">{title}</Text>
            <Text color="white">This is a test Description</Text>
          </Box>
        )}
      </Flex>
    </MotionBox>
  );
};

export default ProjectItem;
