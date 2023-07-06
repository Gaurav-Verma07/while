import { ReactElement, useContext } from 'react';
import Header from '../Header/Header';

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
      <footer>footer</footer>
    </>
  );
};

export default Layout;
