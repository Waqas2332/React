import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  const { image, title, subtitle } = props.data;
  return (
    <div className={styles["cards-div"]}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
