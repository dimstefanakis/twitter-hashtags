import { useEffect } from "react";
import { Box, Flex, useColorMode } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") {
      setColorMode("dark");
    }
  }, [colorMode]);

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      {children}
    </Flex>
  );
}

export default Layout;
