import React from "react";

import styles from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={styles.detail}>
      <img src={props.img} alt={props.title} />

      <h1>{props.title}</h1>
      <adress>{props.adress}</adress>

      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
