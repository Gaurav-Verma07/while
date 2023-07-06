import classes from './Stats.module.css';

const data = [
  {
    data: '100+',
    type: 'Colleges',
  },
  {
    data: '1M+',
    type: 'Students',
  },
  {
    data: '200+',
    type: 'Mentors',
  },
];

const Stats = () => {
  return (
    <section className={classes.section}>
      <div className={classes.main}>
        {data.map((item, index) => (
          <div className={classes.box} key={index}>
            <h1 className={classes.data}>{item.data}</h1>
            <h3 className={classes.type}>{item.type}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Stats;
