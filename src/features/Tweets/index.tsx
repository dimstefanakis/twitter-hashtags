import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/react";
import { Tweet } from "react-twitter-widgets";
import axios from "axios";

interface TweetsProps {
  tweets: any[];
}

function Tweets({ tweets }: TweetsProps) {
  const [loading, setLoading] = useState(true);
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

  return (
    <VStack w="100%">
      {tweets.map((tweet: any) => (
        <Tweet key={tweet?.id} tweetId={tweet?.id} options={{width: "500", theme: 'dark', loading: 'lazy'}}/>
      ))}
    </VStack>
  );
}

export default Tweets;
