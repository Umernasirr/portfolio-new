import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const HeaderButton = ({ title, idx }) => (
    <Button
      color={selectedIndex === idx ? "secondary.200" : "white"}
      onClick={() => setSelectedIndex(idx)}
      bg=""
      mx={3}
      fontWeight="medium"
      borderRadius={0}
      borderBottomColor={
        selectedIndex === idx ? "secondary.200" : "transparent"
      }
      borderBottomWidth={3}
      _hover={{
        color: "secondary.200",
        borderBottomColor: "secondary.200",
      }}
      _active={{ color: "secondary.400", borderBottomColor: "secondary.400" }}
    >
      {title}
    </Button>
  );

  return (
    <Flex
      w="100vw"
      h="56px"
      bg="gray.700"
      boxShadow="xl"
      justify="center"
      align="center"
    >
      <HeaderButton idx={0} title="Home" />
      <HeaderButton idx={1} title="About" />
      <HeaderButton idx={2} title="Web" />
      <HeaderButton idx={3} title="Mobile" />
      <HeaderButton idx={4} title="Resume" />
    </Flex>
  );
};

export default Header;
