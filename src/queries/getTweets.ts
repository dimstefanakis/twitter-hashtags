import axios from "axios";

async function getTweets(nextToken?: string) {
  let response = await axios.post(
    `/api/tweets`,
    {
      nextToken,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  );

  return response.data;
}

export default getTweets;
