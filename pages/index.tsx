import { Herobox, Stats } from '@/components';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
        <title>While</title>
      </Head>
      <Herobox />
      <Stats />
    </div>
  );
};

export default index;
