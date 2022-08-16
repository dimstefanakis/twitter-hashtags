import { useEffect, useState } from "react";
import axios from "axios";

function Tweets() {
  async function getTweets() {
    let response = await axios.get(
      "/api/tweets?limit=10&offset=0&sort=desc",
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    console.log(response.data);
  }

  useEffect(() => {
    getTweets();
  }, []);

  return null;
}

export default Tweets;
