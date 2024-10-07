import { Button } from "@chakra-ui/react";

export default function SecondaryButton({ text, clickAction }) {
    return (
        <Button
            bgColor="white"
            color="gray.800"
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
