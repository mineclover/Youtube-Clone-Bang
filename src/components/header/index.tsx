import React from 'react';
import { useState } from 'react';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import styles from './header.module.scss';
import SideBar from '../side-bar';

type Props = {};

const Header = () => {
  return (
    <header className={styles.header}>
      <Left />

      <Middle />

      <Right />
    </header>
  );
};

export default Header;
