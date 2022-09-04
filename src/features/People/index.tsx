import { VStack, Flex, Text, Box, Image, useTheme } from "@chakra-ui/react";

interface PeopleProps {
  people: any[];
}

function People({ people }: PeopleProps) {
  const theme = useTheme();
  return (
    <Flex flexFlow="column" maxW="250px" mr={10}>
      <Text fontWeight="semibold" fontSize="2xl" my={10}>
        Tweet using the hashtag{" "}
        <span style={{ color: theme.colors.green[200] }}>
          #{process.env.NEXT_PUBLIC_HASHTAG}
        </span>{" "}
        to show up here
      </Text>
      <VStack>
        {people.map((person) => (
          <Flex
            key={person?.id}
            w="min-content"
            borderRadius="full"
            justifyContent="flex-start"
            alignItems="center"
            bg="blackAlpha.300"
            p={2}
          >
            <Image
              src={person?.profile_image_url}
              borderRadius="full"
              alt="profile"
            ></Image>
            <Text mx={2} fontSize="sm" fontWeight="semibold">
              {person?.name}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Flex>
  );
}

export default People;
