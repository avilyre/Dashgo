import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function Home(): JSX.Element {
  return (
    <Flex
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input label="E-mail" name="email" type="email" />
          <Input label="Senha" name="password" type="password" />

        </Stack>

        <Button
          type="submit"
          colorScheme="purple"
          mt="6"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
