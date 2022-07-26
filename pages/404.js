import React from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import styles from '../styles/NotFoundPage.module.scss'


const NotFound = () => {
  return (
    <MainContainer>
      <h1 className={styles.title}>Sorry... something went wrong :(</h1>

      <Link href={'/'}>
        <a className={styles.btn}>Go To Main Page</a>
      </Link>
    </MainContainer>
  );
};

export default NotFound;