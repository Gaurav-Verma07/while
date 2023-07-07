import classes from './Header.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [toggle, setToogle] = useState(false);

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img  src="/assets/whileLogo.png" layout="fill" alt="While logo" />
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
          <Link className={classes.links} href="/">
            Home
          </Link>
        </li>
        <li className={clsx(toggle ? classes.fade : '')}>
          <Link className={classes.links} href="#about">
            About
          </Link>
        </li>
        <li className={clsx(toggle ? classes.fade : '')}>
          <Link className={classes.links} href="#feature">
            Feature
          </Link>
        </li>
        <li className={clsx(toggle ? classes.fade : '')}>
          <Link className={classes.links} href="/goals">
            Goals
          </Link>
        </li>
        <li className={clsx(toggle ? classes.fade : '')}>
          <Link className={classes.joinbtn} href="/goals">
            Join Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
