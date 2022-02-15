import React from "react";
import styles from "./cart.module.css";
import defaultPic from "../../../images/bags/bag-1.png";

const Cart = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.cardHedaderImages}>
            <img src={defaultPic} alt="defaultPic" className={styles.userPic} />
        </div>
      </div>

      <button className={styles.btnDetails}>View Details</button>
    </div>
  );
};
export default Cart;
