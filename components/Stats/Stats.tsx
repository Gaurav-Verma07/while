import CountUp from 'react-countup';
import classes from './Stats.module.css';

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
  return (
    <section className={classes.section}>
      <div className={classes.main}>
        {data.map((item, index) => (
          <div className={classes.box} key={index}>
            <h1 className={classes.data}>
              <CountUp end={item.data}/>+
            </h1>
            <h3 className={classes.type}>{item.type}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stats;
