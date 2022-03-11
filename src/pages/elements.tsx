import { Demo } from 'components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Elements: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frontier Exercise Elements</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <Demo />
      </main>
    </div>
  );
};

export default Elements;
