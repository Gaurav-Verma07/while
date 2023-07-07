import classes from "./Header.module.css"
import { useState } from "react";
import clsx from "clsx";

const Header = () => {

const [toggle , setToogle] = useState(false);




  return (
    <nav className={classes.nav}>
    <div className={classes.logo}>
     <img src="" alt="Logo Image" />
    </div>
    <div className={classes.hamburger} onClick= {()=>{
      setToogle(!toggle);
    }} >
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
    </div>
    <ul className={clsx(classes.navlinks, toggle?classes.open:'')}>
        <li className={clsx( toggle?classes.fade:'')}><a href="/">Home</a></li>
        <li className={clsx( toggle?classes.fade:'')}><a href="#">About</a></li>
        <li className={clsx( toggle?classes.fade:'')}><a href="/programs">Program</a></li>
        <li className={clsx( toggle?classes.fade:'')}><a href="/mentors">Mentors</a></li>
    </ul>
</nav>
  );
};

export default Header;
