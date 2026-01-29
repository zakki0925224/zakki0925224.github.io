import { Link, Text, Icon, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <VStack py={10} spacing={2}>
            <Link
                href="https://github.com/zakki0925224/zakki0925224.github.io"
                isExternal
                display="flex"
                alignItems="center"
                gap={2}
                color="gray.500"
                _hover={{ color: "teal.500" }}
            >
                <Icon as={FaGithub} />
                <Text fontSize="sm">View source on GitHub</Text>
            </Link>
        </VStack>
    );
}
