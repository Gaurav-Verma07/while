import classes from './Footer.module.css';
import Link from 'next/link';
import clsx from 'clsx';

const Footer = () => {
return (
    <footer className={classes.footer}>
        <div className={classes.upper}>
        <div className={classes.logo}>
                <img src="/assets/whileLogo.png" alt="While logo" />
        </div>
        <div className={classes.social}>
            <a href="https://www.linkedin.com/company/while-network-private-limited/"><button className={classes.linkedin}>Linkedin</button></a>
            <a href="https://chat.whatsapp.com/GsWWLBfsCBxILxQWjBVIAk"><button className={classes.whatsapp}>Whatsapp</button></a>
        </div>
        </div>
        <div className={classes.lower}>
            <div className={classes.company}>
                <h3>Company</h3>
               <ul>
                    
                        <div>About</div>
                    
                        <div>Goals</div>
                    
                        <div>Teams</div>
                    
                        <div>Features</div>
                    
                </ul> 
            </div>
            <div className={classes.join}>
                <h3>Join Us</h3>
                <ul>
                    
                        <div>Campus Ambassador</div>
                    
                        <div>Mentor</div>
                    
                        <div>Mentee</div>
                    
                        <div>Management</div>
                    
                </ul> 
            </div>
        </div>
    </footer>
);
};

export default Footer;