import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
    const { toggleColorMode } = useColorMode();
    const Icon = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            aria-label="Toggle theme"
            icon={<Icon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="lg"
            pos="absolute"
            top={4}
            right={4}
            borderRadius="full"
        />
    );
}
