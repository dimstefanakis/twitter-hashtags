import { Heading, Flex } from "@chakra-ui/react";

function Header() {
  return (
    <Heading as="h1" my={10} size="2xl" fontWeight="bold">
      #{process.env.NEXT_PUBLIC_HASHTAG}
    </Heading>
  );
}

export default Header;
