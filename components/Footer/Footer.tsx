import classes from './Footer.module.css';
import clsx from 'clsx';

const Footer = () => {
return (
    <footer>
        <div className={classes.upper}>
            <div className={classes.logo}></div>
            <div className={classes.socialLink}></div>
        </div>
        <div className={classes.lower}>
            
        </div>
    </footer>
);
};

export default Footer;