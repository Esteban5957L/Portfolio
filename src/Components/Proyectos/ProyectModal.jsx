import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Heading,
  Link,
} from "@chakra-ui/react";
import { Github } from "@icons-pack/react-simple-icons";
import React from "react";
import ProyectsCarousel from "./ProyectsCarousel";

const ProyectModal = ({
  name,
  description,
  frontEndTech,
  backEndTech,
  finalRef,
  isOpen,
  onClose,
  dbAndORM,
  otherTechs,
  imgsGalery,
  linkToRepo,
  linkToPage,
}) => {
  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="2px"
      />
      <ModalContent backgroundColor="backgroundHome">
        <ModalHeader>
          <Heading color="textColor">{name}</Heading>
        </ModalHeader>
        <ModalCloseButton color="textColor" />

        <ModalBody>
          <ProyectsCarousel imgsGalery={imgsGalery} />
          <Text m={2} color="textColor">
            {description}
          </Text>
          {frontEndTech.length !== 0 && (
            <Text m={2} color="textColor">
            <Text as='u'>Frontend:</Text> {frontEndTech.join(" - ")}
            </Text>
          )}
          {backEndTech.length !== 0 && (
            <Text m={2} color="textColor">
            <Text as='u'>Backend:</Text> {backEndTech.join(" - ")}
            </Text>
          )}
          {dbAndORM.length !== 0 && (
            <Text m={2} color="textColor">
            <Text as='u'>DB & ORM:</Text> {dbAndORM.join(" - ")}
            </Text>
          )}
          {otherTechs.length !== 0 && (
            <Text m={2} color="textColor">
              <Text as='u'>Otras tecnologías:</Text> {otherTechs.join(" - ")}
            </Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Link
            href={linkToPage}
            target="_blank"
            _hover={{ color: "detailsPrimary", textDecoration: "none" }}
          >
            <Button m={2} rightIcon={<ExternalLinkIcon />} size={['xs','md']}>
              Visitar página
            </Button>
          </Link>
          <Link
            href={linkToRepo}
            target="_blank"
            _hover={{ color: "detailsPrimary", textDecoration: "none" }}
          >
            <Button m={2} rightIcon={<Github />} size={['xs','md']}>
              Ver código
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProyectModal;
