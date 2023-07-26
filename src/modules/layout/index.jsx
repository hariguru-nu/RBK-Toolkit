import React from "react";
import Sidebar from "@Modules/sidebar";
// import Header from "@Modules/header";
import styles from "./styles.module.scss";
import Header from "@Modules/header";

const Layout = () => {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.contentPageContainer}>
        {/* <Header /> */}
        <Header/>
      </div>
    </div>
  );
};

export default Layout;
