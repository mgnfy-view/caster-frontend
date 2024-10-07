import { Box, Text, FormControl, FormLabel, FormErrorMessage, Input, Textarea, Button } from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

import { NAME_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from "./utils/constants";

export default function CreateCampaign() {
    return (
        <Box bgGradient="linear(to-tr, blue.100, pink.100)" paddingBlock={28} minHeight="100vh">
            <Box maxWidth="workSpace" marginInline="auto" paddingInline={12}>
                <Box
                    bgColor="white"
                    maxWidth={620}
                    marginInline="auto"
                    paddingTop={10}
                    paddingBottom={12}
                    paddingInline={8}
                    borderRadius={16}
                >
                    <Text as="h2" fontSize="xl" fontWeight="600" marginBottom={6}>
                        Create a campaign
                    </Text>
                    <Formik
                        initialValues={{ name: "", description: "", merkleRoot: "" /*options: "", duration: 0*/ }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .max(NAME_MAX_LENGTH, `Must be ${NAME_MAX_LENGTH} characters or less`)
                                .required("Required"),
                            description: Yup.string()
                                .max(DESCRIPTION_MAX_LENGTH, `Must be ${DESCRIPTION_MAX_LENGTH} characters or less`)
                                .required("Required"),
                            merkleRoot: Yup.string().length(32, `Must be exactly 32 characters`).required("Required"),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form>
                            <Field name="name">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name} marginBottom={8}>
                                        <FormLabel>Name</FormLabel>
                                        <Input {...field} focusBorderColor="gray.700" errorBorderColor="red.400" />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="description">
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={form.errors.description && form.touched.description}
                                        marginBottom={8}
                                    >
                                        <FormLabel>Description</FormLabel>
                                        <Textarea {...field} focusBorderColor="gray.700" errorBorderColor="red.400" />
                                        <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="merkleRoot">
                                {({ field, form }) => (
                                    <FormControl
                                        isInvalid={form.errors.merkleRoot && form.touched.merkleRoot}
                                        marginBottom={12}
                                    >
                                        <FormLabel>Merkle root</FormLabel>
                                        <Input {...field} focusBorderColor="gray.700" errorBorderColor="red.400" />
                                        <FormErrorMessage>{form.errors.merkleRoot}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Button
                                type="submit"
                                bgColor="gray.800"
                                color="white"
                                borderRadius={600}
                                paddingBlock={6}
                                width="100%"
                                _hover={{
                                    transform: "scale(1.02)",
                                }}
                                _active={{
                                    transform: "scale(1.02)",
                                }}
                            >
                                Create Campaign
                            </Button>
                        </Form>
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
}
