import { VStack } from "@chakra-ui/react";

interface PeopleProps {
  people: any[];
}

function People({ people }: PeopleProps) {
  return (
    <VStack>
      {people.map((person) => (
        <div key={person?.id}>{person?.name}</div>
      ))}
    </VStack>
  );
}

export default People;
