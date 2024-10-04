import { Box, Flex, Heading, Text, Image, Spacer } from "@chakra-ui/react";

import PrimaryButton from "./components/PrimaryButton";

export default function HomePage() {
    return (
        <Box>
            <Box paddingBlock={28} bgGradient="linear(to-tr, blue.100, pink.100)">
                <Box maxWidth="workSpace" marginInline="auto" paddingInline={10}>
                    <Flex direction="row" justifyContent="center" alignItems="center">
                        <Box marginRight={20}>
                            <Heading size="3xl" lineHeight={1.06} letterSpacing={-0.1} marginBottom={4}>
                                Powering decentralized voting with caster
                            </Heading>
                            <Text fontSize="xl" lineHeight={1.5} letterSpacing={0.1} color="blue.800" marginBottom={4}>
                                Caster is a customizable, general purpose decentralized voting protocol
                            </Text>
                            <PrimaryButton text="CREATE A CAMPAIGN" />
                        </Box>
                        <Spacer />
                        <Image src="./src/assets/hero-low-poly-pink.png" height={450} objectFit="cover" opacity={0.5} />
                    </Flex>
                </Box>
            </Box>
            <Box paddingBlock={28}>
                <Box maxWidth="workSpace" marginInline="auto" paddingInline={10}>
                    <Heading size="lg" lineHeight={1.06} letterSpacing={-0.1} marginBottom={4}>
                        Explore Ongoing Campaigns
                    </Heading>
                </Box>
            </Box>
        </Box>
    );
}
