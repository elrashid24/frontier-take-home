import { useEffect, useState } from 'react';

type UseFormDataHookValue = {
  response?: Frontier.Job;
  status: 'none' | 'loading' | 'data' | 'error';
};

const DATA_URL = 'https://cdn.frontier.jobs/demo/exercise_form.json';

export const useFormData = (): UseFormDataHookValue => {
  const [jobData, setJobData] = useState<Frontier.Job>();
  const [status, setStatus] = useState<UseFormDataHookValue['status']>('none');

  useEffect(() => {
    if (jobData) return;
    const getDataFromServer = async () => {
      try {
        setStatus('loading');
        const exampleJobReq = await fetch(DATA_URL);
        const exampleJob = await exampleJobReq.json();
        setJobData(exampleJob);
        setStatus('data');
      } catch (err) {
        console.error(err);
        setStatus('error');
      }
    };
    getDataFromServer();
  }, [jobData]);

  return {
    response: jobData,
    status,
  };
};
