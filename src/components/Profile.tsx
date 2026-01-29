import { VStack, Avatar, Box, Heading, Text } from "@chakra-ui/react";

interface ProfileProps {
    name: string;
    description: string;
    avatarUrl: string;
}

export function Profile({ name, description, avatarUrl }: Readonly<ProfileProps>) {
    return (
        <VStack gap={4} textAlign="center">
            <Avatar size="2xl" name={name} src={avatarUrl} bg="teal.500" />
            <Box>
                <Heading size="xl">{name}</Heading>
                <Text color="gray.500" fontSize="lg">{description}</Text>
            </Box>
        </VStack>
    );
}
