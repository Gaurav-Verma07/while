import clsx from "clsx";
import classes from "./Goals.module.css"

const Goals = () => {
    return (
    <section>
    <center>Our Goals</center>
    <div className="row">
    <div className=" col-lg-4 col-md-6 col-md-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className={clsx(" col-lg-4 col-md-6 col-md-12", classes.box)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className=" col-lg-4 col-md-6 col-md-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className=" col-lg-4 col-md-6 col-md-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className=" col-lg-4 col-md-6 col-md-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className=" col-lg-4 col-md-6 col-md-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
  </section>);
  };
  
  export default Goals;
  