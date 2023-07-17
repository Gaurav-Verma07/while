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
                <h3 className={classes.heading}>Company</h3>
               <ul className={classes.links}>
                    
                        <Link className= {classes.link} href="/#about">About</Link>
                    
                        <Link className= {classes.link} href="/#goals" >Goals</Link>
                    
                        {/* <Link className= {classes.link}>Teams</Link> */}
                    
                        <Link className= {classes.link} href="/#features" >Features</Link>
                    
                </ul> 
            </div>
            <div className={classes.join}>
                <h3 className={classes.heading} >Join Us</h3>
                <ul className={classes.links} >
                    
                <Link className= {classes.link} href="https://forms.gle/hxU3cJGEa67yiFnw7">Campus Ambassador</Link>                    
                <Link className= {classes.link} href="https://forms.gle/hxU3cJGEa67yiFnw7">Mentor</Link>
                    
                <Link className= {classes.link} href="https://forms.gle/hxU3cJGEa67yiFnw7">Mentee</Link>
                    
                {/* <Link className= {classes.link} href="https://forms.gle/hxU3cJGEa67yiFnw7">About</Link> */}
                    
                </ul> 
            </div>
        </div>
    </footer>
);
};

export default Footer;