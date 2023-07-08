import { data } from '@/constants/career';
import classes from './Career.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Career = () => {
  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <h4 className={classes.subhead}>We&apos;re hiring!</h4>
        <h1 className={classes.heading}>
          Be part of our<span className="gradient"> Mission</span>
        </h1>
        <p className={classes.about}>
          We&apos;re looking for passionate people to join us on our mission. We value flat hierarchies, clear
          communication, and full ownership and responsibility
        </p>
      </div>
      <div className={classes.main}>
        {data.map((data, index) => (
          <div className={classes.box} key={index}>
            <div className={classes.profile}>
              <h3 className={classes.designation}>{data.designation}</h3>
              <Link className={classes.btn} href={data.link} target="__blank">
                Apply
                <div className={classes.icon}>
                  <Image src="/assets/apply.svg" layout="fill" alt="apply icon" />
                </div>
              </Link>
            </div>
            <p className={classes.detail}>{data.about}</p>
            <div className={classes.tags}>
              {data.tags.map((tag, index) => (
                <span className={classes.tag} key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
