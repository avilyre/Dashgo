import {
  FormControl,
  FormLabel,
  Input as ChakraInput
} from "@chakra-ui/react";
import { InputProps } from "./interface";

export function Input({ name, label, ...rest }: InputProps): JSX.Element {
  return (
    <FormControl>
      {
        !!label
        && (
          <FormLabel
            htmlFor={name}
          >
            {label}
          </FormLabel>
        )
      }
      
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="purple.500"
        bg="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: "gray.900"
        }}
        {...rest}
      />
    </FormControl>
  );
}
