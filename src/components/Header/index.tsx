import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function Header(): JSX.Element {
  return(
    <Flex
      as="header"
      h="20"
      w="100%"
      maxWidth={1480}
      px="6"
      mt="4"
      mx="auto"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" ml="1" color="purple.500">.</Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: "gray.400"
          }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
    </Flex>
  );
}
