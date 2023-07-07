import { Herobox, Stats , Goals ,About } from '@/components';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
        <title>While</title>
      </Head>
      <Herobox />
      <Stats />
      <About />
      <Goals />
    </div>
  );
};

export default index;
