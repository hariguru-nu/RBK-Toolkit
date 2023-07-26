import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import RbkLogo from "@Assets/images/logo.png";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton"
import { FaLock, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navLogo}>
        <Image
          width={100}
          height={30}
          src={RbkLogo}
          alt="logo"
          className={styles.logoImage}
        />
        <h3>Reebok Toolkit</h3>
      </div>
      <div className={styles.navAccount}>
        <Tooltip title="Access Account" placement="top">
          <IconButton className={styles.iconButton}>
            <FaLock />
          </IconButton>
        </Tooltip>
        <Tooltip title="Account" placement="top">
          <IconButton className={styles.iconButton}>
            <FaUser />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
