import { Box, Heading, SimpleGrid, Card, Link, CardBody, HStack, Badge, Text, Icon, useColorModeValue } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

interface Achievement {
    title: string;
    url: string;
    year: number;
}

interface AchievementsProps {
    items: Achievement[];
}

export function Achievements({ items }: Readonly<AchievementsProps>) {
    return (
        <Box>
            <Heading size="md" mb={4}>🏆️ Achievements</Heading>
            <SimpleGrid columns={{ base: 1 }} spacing={4}>
                {items.map((item, _) => (
                    <AchievementCard key={item.title} item={item} />
                ))}
            </SimpleGrid>
        </Box>
    );
}

// Generate a color scheme based on the year
const getYearColorScheme = (year: number) => {
    const colors = ["teal", "blue", "cyan", "purple", "pink", "orange", "green"];
    return colors[year % colors.length];
};

function AchievementCard({ item }: Readonly<{ item: Achievement }>) {
    const bg = useColorModeValue("white", "gray.800");
    const badgeColor = getYearColorScheme(item.year);

    return (
        <Card
            as={Link}
            href={item.url}
            isExternal
            variant="elevated"
            _hover={{ shadow: "lg", textDecoration: "none" }}
            cursor="pointer"
            width="100%"
            bg={bg}
        >
            <CardBody>
                <HStack mb={2}>
                    <Badge colorScheme={badgeColor}>{item.year}</Badge>
                    <Text fontSize="sm" color="gray.500">
                        {new URL(item.url).hostname}
                    </Text>
                </HStack>
                <Heading size="sm" pr={6}>{item.title}</Heading>
                <Icon as={FiExternalLink} position="absolute" top={4} right={4} color="gray.400" />
            </CardBody>
        </Card>
    );
}
