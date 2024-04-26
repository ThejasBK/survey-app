import { Box, Heading, Text, Button } from "@chakra-ui/react";

const ThankYou = () => {
  return (
    <Box
      width="full"
      maxW="md"
      mx="auto"
      mt={5}
      p={8}
      rounded="lg"
      boxShadow="lg"
    >
      <Box textAlign="center">
        <Heading>Thank You!</Heading>
      </Box>
      <Box my={4} textAlign="center">
        <Text>
          Your submission has been received. We appreciate your time and effort.
        </Text>
      </Box>
      <Box textAlign="center">
        <Button colorScheme="teal" onClick={() => (window.location.href = "/")}>
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default ThankYou;
