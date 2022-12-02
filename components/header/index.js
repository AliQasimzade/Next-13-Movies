import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#" className={styles.link}>MOVIES</Link>
          <Link href="#" className={styles.link}>SERIES</Link>
          <Link href="#" className={styles.link}>KIDS</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
