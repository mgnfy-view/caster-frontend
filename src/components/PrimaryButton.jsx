import { Button } from "@chakra-ui/react";

export default function PrimaryButton({ text, clickAction }) {
    return (
        <Button
            // bgGradient="linear(to-br, blue.500, pink.300)"
            bgColor="gray.800"
            color="white"
            borderRadius={600}
            padding={4}
            onClick={clickAction}
            _hover={{
                transform: "scale(1.07)",
            }}
            _active={{
                transform: "scale(1.07)",
            }}
        >
            {text}
        </Button>
    );
}
