import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import PoolPage from '@ui/components/pages/PoolPage';
import { useMultiIonic } from '@ui/context/MultiIonicContext';

const IonicPage: NextPage = () => {
  const { setGlobalLoading } = useMultiIonic();
  useEffect(() => {
    setGlobalLoading(false);
  }, [setGlobalLoading]);

  return (
    <>
      <Head>
        <title key="title">Pool Details</title>
      </Head>
      <PoolPage />
    </>
  );
};

export default IonicPage;
