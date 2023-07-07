import classes from './Header.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const Header = () => {
  const [toggle, setToogle] = useState(false);

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src="" alt="Logo Image" />
      </div>
      <div
        className={classes.hamburger}
        onClick={() => {
          setToogle(!toggle);
        }}
      >
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
      <ul className={clsx(classes.navlinks, toggle ? classes.open : '')}>
        <li className={clsx(toggle ? classes.fade : '')}>
          <Link href="/">Home</Link>
        </li>
        <li className={clsx(toggle ? classes.fade : '')}>
          <Link href="#about">About</Link>
        </li>
        <li className={clsx(toggle ? classes.fade : '')}>
          <Link href="#feature">Feature</Link>
        </li>
        <li className={clsx(toggle ? classes.fade : '')}>
          <Link href="/goals">Goals</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
