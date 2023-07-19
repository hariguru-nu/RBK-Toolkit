import React from "react";
import EbLogo from "@Assets/images/eb_logo.png";
import RbkLogo from "@Assets/images/rbk-logo.png";
import styles from "./styles.module.scss";
import Link from "@Components/Link";
import Image from "@Components/Image";

const HomePage = () => {
  return (
    <div className= {styles.app}>
     <div className={styles.container}>
       <div className={styles.sparcContainer}>
         <div className={styles.sparcImg}></div>
       </div>
       <div className={styles.btnGroup}>
         <Link href="https://toolkit-qa.eddiebauer.com" className={styles.btnLink}>
           <Image src={EbLogo} alt="eblogo" className={styles.eblogo} />
         </Link>
         <Link href="/login" className={styles.btnLink}>
           <Image src={RbkLogo} alt="rbklogo" className={styles.rbklogo} />
         </Link>
       </div>
     </div>
   </div>
  );
};

export default HomePage;
