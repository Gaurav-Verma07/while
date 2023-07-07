import clsx from 'clsx';
import classes from './Goals.module.css';

const Goals = () => {
  return (
    <section className={classes.container} id="goals">
      <h1 className={classes.heading}>
        <center>
          Our <span className="gradient">Goals</span>
        </center>
      </h1>
      <div className={clsx(classes.row, 'row')}>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')}>
          <div className={clsx(classes.card1, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Connect Mentors and Learners</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
              We emphasis on creating a platform that seamlessly connects mentors and learners across different fields
              and areas of expertise{' '}
            </p>
          </div>
        </div>
        <div className={clsx(' col-lg-4 col-md-6 col-md-12', classes.cardcontainer)}>
          <div className={clsx(classes.card2, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Promote Collaboration and Networking</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
              We focus on creating opportunities for users to collaborate, connect, and network with like-minded
              individuals and professionals.
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')}>
          <div className={clsx(classes.card3, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Expand Reach and Global Accessibility</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
              We aim to expand the platform&apos;s reach to a diverse global audience, making knowledge accessible
              regardless of geographical barriers to cater to users from different regions.
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')}>
          <div className={clsx(classes.card4, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Foster a Knowledge-Sharing Community</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
              At While, we are building a vibrant and engaged community of users who are passionate about sharing
              knowledge and experiences by encourage users to contribute valuable content, insights, and expertise.
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardcontainer, 'col-lg-4 col-md-6 col-md-12')}>
          <div className={clsx(classes.card5, 'card', classes.cardMain)}>
            <h5 className={clsx(classes.cardTitle, 'card-title')}>Ensure Quality and Credibility</h5>
            <p className={clsx(classes.cardText, 'card-text')}>
              We uphold high standards of content quality and accuracy through user verification processes and
              moderation. Implement rating systems and user feedback mechanisms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
