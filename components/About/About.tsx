import clsx from "clsx";
import classes from "./About.module.css"

const About = () => {
    return(
    <section className={classes.section}>
        <h1 className={classes.heading}><center>About<span className="gradient"> Us</span></center></h1>
        <div className={classes.subtext}>We are dedicated to creating a vibrant community of lifelong learners who are passionate about sharing and expanding their knowledge.Our platform offers a wealth of resources, interactive forums, and collaborative opportunities to  spark intellectual curiosity and foster meaningful connections. Join us on this exciting journey of learning, discovery, and social engagement.</div>
    </section>);
};

export default About;
