import { AOS, Layout } from '@/components';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AOS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AOS>
    </>
  );
};

export default App;
