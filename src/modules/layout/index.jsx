import React from "react";
import Sidebar from "@Modules/sidebar";
import styles from "./styles.module.scss";
import Header from "@Modules/header";

const Layout = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.contentPageContainer}>
        <Header/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
