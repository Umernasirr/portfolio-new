import React from "react";
import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const ProjectModal = ({ showModal, setShowModal, selectedProject }) => {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedProject.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={selectedProject.imgSrc} />
          <Text>{selectedProject.desc}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
