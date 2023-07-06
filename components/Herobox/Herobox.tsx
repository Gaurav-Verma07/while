import Image from 'next/image';
import classes from './Herobox.module.css';
const Herobox = () => {
  return (
    <section className={classes.section} >
      <div className={classes.content}>
        <h1 className={classes.heading}>
          Sharing<span className="gradient"> knowledge</span>, Shaping <span className="gradient">futures</span>
        </h1>
        <p className={classes.subtext}>
          Ignite the potential within every young mind as we inspire, guide, and support them on their journey towards
          personal and academic excellence.
        </p>
      </div>
      <div className={classes.display}>
        <Image src="/assets/herobox.svg" alt="herobox" layout="fill" />
      </div>
    </section>
  );
};
export default Herobox;
