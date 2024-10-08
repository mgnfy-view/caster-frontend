import { Button } from "@chakra-ui/react";

export default function PrimaryButton({ text, clickAction }) {
    return (
        <Button
            bgColor="gray.800"
            color="white"
            borderRadius={100}
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
