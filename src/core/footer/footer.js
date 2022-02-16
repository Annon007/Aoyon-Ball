import React from "react";
import styles from './footer.module.css';

const Footer = () =>{
    return <div className={styles.footerContainer}>
        <div>
            <h3>Address</h3>
            <p>746 Country Dr. Mount Prospect, IL 60056</p>
        </div>
        <div>
            <h3>Terms</h3>
        </div>
        <div>
            <h3>Product</h3>
        </div>
    </div>
};
export default Footer;