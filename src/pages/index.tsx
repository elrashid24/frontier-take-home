import { useFormData } from 'hooks/useFormData';
import type { NextPage } from 'next';
import Head from 'next/head';

const App: NextPage = () => {
  const { status, job } = useFormData();

  return (
    <div>
      <Head>
        <title>Frontier Exercise</title>
        <meta name="description" content="" />
      </Head>

      <main>{status === 'loading' ? <>Loading...</> : <p style={{color: 'white'}}>Job Loaded: {job?.job.title}... let&apos;s go!</p>}</main>
    </div>
  );
};

export default App;
