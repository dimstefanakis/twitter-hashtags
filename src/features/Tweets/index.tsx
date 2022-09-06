import { useEffect, useState } from "react";
import { VStack, Flex, Button } from "@chakra-ui/react";
import { Tweet } from "react-twitter-widgets";
import { VariableSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import getTweets from "../../queries/getTweets";
import axios from "axios";

interface TweetsProps {
  initialTweets: any[];
  meta: any;
}

function Tweets({ initialTweets, meta }: TweetsProps) {
  const [tweets, setTweets] = useState(initialTweets);
  const [nextToken, setNextToken] = useState(meta.next_token);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // async function getTweets() {
  //   let response = await axios.get("/api/tweets?limit=10&offset=0&sort=desc", {
  //     headers: {
  //       Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
  //     },
  //   });
  //   setTweets(response.data.data);
  //   console.log(response.data);
  // }

  useEffect(() => {
    // getTweets();
  }, []);

  async function loadMore() {
    setLoading(true);
    let data = await getTweets(nextToken);
    setLoading(false);
    setNextToken(data.meta.next_token);
    setTweets([...tweets, ...data.data]);
  }

  return (
    <Flex flexFlow="column">
      <VStack w="100%">
        {tweets.map((tweet: any) => (
          <Tweet
            key={tweet?.id}
            tweetId={tweet?.id}
            options={{ width: "500", theme: "dark", loading: "lazy" }}
          />
        ))}
        {/* <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <VariableSizeList
            itemCount={itemCount}
            onItemsRendered={onItemsRendered}
            ref={ref}
            {...otherListProps}
          />
        )}
      </InfiniteLoader> */}
      </VStack>
      <Button mt={4} mb={10} onClick={loadMore} isLoading={loading}>
        Load more
      </Button>
    </Flex>
  );
}

export default Tweets;
