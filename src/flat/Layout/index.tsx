import { Box, Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      {children}
    </Flex>
  );
}

export default Layout;
