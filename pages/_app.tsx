import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from '@/components';
import { AppProps } from 'next/app';
import '../styles/globals.css';


const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
            <Layout>
              <Component {...pageProps} />
            </Layout>
    </>
  );
};

export default App;
