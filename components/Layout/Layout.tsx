import { ReactElement, useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactElement[] | ReactElement | string;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
