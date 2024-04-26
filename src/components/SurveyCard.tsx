import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SurveyCardProps } from "../types/suvery";

import { useFormik } from "formik";
import { initialValues } from "../utils/form";
import { nanoid } from "nanoid";
import OptionImageWithCheckBox from "./OptionImage";

const SurveyCard: React.FC<SurveyCardProps> = ({ survey }) => {
  const formik = useFormik({
    initialValues: {
      question: initialValues,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box p={6}>
      <Card>
        <CardHeader>
          <Heading size="md">{survey.title}</Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={formik.handleSubmit}>
            <VStack alignItems="flex-start">
              <Text textAlign="left" fontSize="4xl">
                1. In love with React & Next
              </Text>

              <Grid templateColumns="repeat(5, 1fr)" columnGap={20} rowGap={4}>
                {initialValues.map((src, index) => (
                  <GridItem key={nanoid()} cursor="pointer">
                    <OptionImageWithCheckBox
                      key={nanoid()}
                      src={src.url}
                      name={`question.[${index}].isChecked`}
                      onChange={formik.handleChange}
                      isChecked={formik.values.question[index].isChecked}
                    />
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
};

export default SurveyCard;
