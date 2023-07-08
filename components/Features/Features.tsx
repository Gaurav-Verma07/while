import { features } from '@/constants/featuers';
import classes from './Features.module.css';
import Image from 'next/image';
import clsx from 'clsx';

const Features = () => {
  return (
    <section className={classes.section} id="features">
      <div className={classes.main}>
        <h1 className={clsx(classes.heading, 'gradient')}>Features</h1>
        {features.map((data, index) => (
          <div className={classes.box} key={index}>
            <div
              className={clsx(classes.image, index % 2 !== 0 ? classes.order1 : classes.order0)}
              data-aos={index % 2 !== 0 ? 'fade-left' : 'fade-right'}
            >
              <Image src={data.img} alt="feature pic" layout="fill" />
            </div>
            <div className={classes.content} data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <h3 className={classes.title}>{data.title}</h3>
              {/* <ul> */}
              {data.points.map((point, index) => (
                <p className={classes.point} key={index}>
                  {point}
                </p>
              ))}
              {/* </ul> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
