import { Box, Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      {children}
    </Flex>
  );
}

export default Layout;
