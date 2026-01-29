import { VStack, Button, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface SocialLink {
    title: string;
    url: string;
    icon: IconType;
}

interface SocialLinksProps {
    links: SocialLink[];
}

export function SocialLinks({ links }: Readonly<SocialLinksProps>) {
    const bg = useColorModeValue("white", "gray.800");

    return (
        <VStack gap={3}>
            {links.map((link) => (
                <Button
                    key={link.title}
                    as={Link}
                    href={link.url}
                    isExternal
                    w="full"
                    size="lg"
                    leftIcon={<Icon as={link.icon} boxSize={5} />}
                    colorScheme="gray"
                    variant="outline"
                    bg={bg}
                    _hover={{ transform: "translateY(-2px)", shadow: "md" }}
                    transition="all 0.2s"
                >
                    {link.title}
                </Button>
            ))}
        </VStack>
    );
}
