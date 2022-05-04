import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>,
) {
  console.log('Handle save data');
  console.log('the request', req);
  /* [TODO]
   * 1. Receive form data here
   * 3. Return the right HTTP status code to the frontend, plus any other data
   * 3. Log the data to the console
   */
}
