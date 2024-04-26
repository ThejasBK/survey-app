// create OptionImage component with return type JSX.Element

import { Checkbox, HStack, Image } from "@chakra-ui/react";
import { OptionImageProps } from "../types/suvery";

const OptionImageWithCheckBox = (props: OptionImageProps): JSX.Element => {
  return (
    <HStack>
      <Checkbox
        onChange={props.onChange}
        name={props.name}
        isChecked={props.isChecked}
        size="lg"
        bg="gray.200"
        alignSelf="flex-start"
      />
      <Image
        sx={{
          ":hover": {
            transform: "scale(1.1)",
            transition: "transform 0.2s ease-in-out",
          },
        }}
        onClick={() => {
          document
            .querySelector<HTMLInputElement>(`input[name="${props.name}"]`)
            ?.click();
        }}
        float="left"
        objectFit="cover"
        borderRadius="xl"
        backgroundSize="cover"
        display="inline-block"
        w={120}
        h={120}
        src={props.src}
        alt="Alt"
      />
    </HStack>
  );
};

export default OptionImageWithCheckBox;
