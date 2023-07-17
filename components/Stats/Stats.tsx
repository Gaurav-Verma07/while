import CountUp from 'react-countup';
import classes from './Stats.module.css';
import {useState, useEffect, useMemo, useRef}from 'react';
import { useInViewport } from 'react-in-viewport';
const data = [
  {
    data: 50,
    type: 'Colleges',
  },
  {
    data: 1000,
    type: 'Students',
  },
  {
    data: 20,
    type: 'Mentors',
  },
];

const Stats = () => {

  const [isCounting, setIsCounting] = useState(false);
  const ref = useRef(null);
  const { inViewport } = useInViewport(ref, {}, { disconnectOnLeave: false });

  useEffect(() => {
    if (inViewport && !isCounting) {
      setIsCounting(true);
    }
  }, [inViewport, isCounting]);


  return (
    <section ref={ref}className={classes.section} id="stats">
      <div className={classes.main}>
        {data.map((item, index) => (
          <div className={classes.box} key={index}>
            <h1 className={classes.data}>
              { isCounting &&<CountUp end={item.data}/>}+
            </h1>
            <h3 className={classes.type}>{item.type}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stats;
