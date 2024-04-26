import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <Container p={10}>
      <Box mb={4}>
        <Heading as="h1" size="xl" mb={2}>
          Image Labeling Task Description
        </Heading>
        <Text>
          We are conducting an image labeling task to elicit users&#39;
          understanding of abstract visual concepts, specifically the concept of
          &quot;rugged.&quot; We aim to gather insights into how individuals
          perceive and categorize visual representations of ruggedness.
          <br />
          <br />
          Before starting the image labeling process, we kindly ask you to take
          a moment to visualize what &quot;rugged&quot; means to you. Consider
          the characteristics, scenes, or objects that come to mind when you
          think of the term.
          <br />
          <br />
          On each of the following pages, we ask you to click on images that you
          consider “rugged” or align with your personal interpretation of
          “rugged”. You can choose as many images as you want or not at all.
          Please examine each image carefully. We value your attention to detail
          and your ability to apply your personal interpretation to each image.
          <br />
          <br />
          Please keep in mind that this task requires subjective judgment, as
          perceptions of ruggedness can vary. However, we kindly ask you to
          maintain consistency and apply your understanding of ruggedness
          throughout the labeling process.
          <br />
          <br />
          We appreciate your involvement and dedication to accurately
          categorizing the images in terms of ruggedness. Your efforts will
          greatly contribute to our research and the development of a clearer
          definition of ruggedness in visual representations.
        </Text>
      </Box>

      <Box mb={4}>
        <Heading as="h1" size="xl" mb={2}>
          Voluntary Participation and Withdrawal
        </Heading>
        <Text>
          Whether or not you take part in this task is your choice. You can
          leave the task at any time and it will not be held against you.
          Confidentiality Information obtained about you for this study will be
          kept confidential to the extent allowed by law. Research information
          that identifies you may be shared with the University of Colorado
          Boulder Institutional Review Board (IRB) and others who are
          responsible for ensuring compliance with laws and regulations related
          to research, including people on behalf of the Office for Human
          Research Protections. The information from this research may be
          published for scientific purposes; however, your identity will not be
          given out.
        </Text>
      </Box>
      <Box mb={4}>
        <Heading as="h1" size="xl" mb={2}>
          Confidentiality
        </Heading>
        <Text>
          Information obtained about you for this study will be kept
          confidential to the extent allowed by law. Research information that
          identifies you may be shared with the University of Colorado Boulder
          Institutional Review Board (IRB) and others who are responsible for
          ensuring compliance with laws and regulations related to research,
          including people on behalf of the Office for Human Research
          Protections. The information from this research may be published for
          scientific purposes; however, your identity will not be given out.
        </Text>
      </Box>
      <Box mb={4}>
        <Heading as="h1" size="xl" mb={2}>
          Payment for Participation
        </Heading>
        <Text>
          If you agree to take part in this task, we will pay you 10 dollar for
          your time and effort after you finish the task. It is important to
          know that payment for participation is taxable income.
        </Text>
      </Box>

      {/* Create button called Goto Survey */}

      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Box flexGrow={1} />
        <Button
          colorScheme="green"
          size="lg"
          onClick={() => {
            navigate("/welcome");
          }}
        >
          Go to Survey
        </Button>
      </HStack>
    </Container>
  );
}
