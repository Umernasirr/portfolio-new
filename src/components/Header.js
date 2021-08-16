import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

const Header = ({ aboutRef, webRef, mobileRef, contactRef, scrollToView }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const HeaderButton = ({ title, idx, onClick }) => (
    <Button
      color={selectedIndex === idx ? "secondary.200" : "white"}
      bg="transparent"
      mx={{ base: 0, md: 3 }}
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
      onClick={() => {
        onClick();
        setSelectedIndex(selectedIndex);
      }}
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
      <HeaderButton idx={0} title="Home" onClick={() => console.log("hi")} />
      <HeaderButton
        idx={1}
        title="About"
        onClick={() => scrollToView(aboutRef)}
      />
      <HeaderButton idx={2} title="Web" onClick={() => scrollToView(webRef)} />
      <HeaderButton
        idx={3}
        title="Mobile"
        onClick={() => scrollToView(mobileRef)}
      />
      <HeaderButton
        idx={4}
        title="Contact"
        onClick={() => scrollToView(contactRef)}
      />
      <HeaderButton idx={5} title="My Work" onClick={() => scrollToView()} />
    </Flex>
  );
};

export default Header;
