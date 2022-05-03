import { Apply } from 'components/Apply';
import type { NextPage } from 'next';
import Head from 'next/head';

const Application: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frontier Exercise Elements</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <Apply />
      </main>
    </div>
  );
};

export default Application;
