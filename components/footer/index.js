import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
     <div className={styles.footerContainer}>
       <p><span>Copyright ©</span><span>{new Date().getFullYear().toString()}</span></p>
     </div>
    </footer>
  );
}

export { Footer };
