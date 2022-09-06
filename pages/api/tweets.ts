// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { nextToken } = req.body;
  let response = await axios.get(
    nextToken
      ? `https://api.twitter.com/2/tweets/search/recent?query=%23${process.env.HASHTAG}&expansions=author_id&next_token=${nextToken}`
      : `https://api.twitter.com/2/tweets/search/recent?query=%23${process.env.HASHTAG}&expansions=author_id`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  );
  console.log(response.data);

  res.status(200).json(response.data);
}
