import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import RbkLogo from "@Assets/images/logo.png";
import StyledTooltip from "@Components/Tooltip";
import IconButton from "@mui/material/IconButton";
import { FaLock, FaUser } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [card, setCard] = useState(false);

  const handleClick = () => {
    setCard(!card);
  };

  const renderComponent = () => {
    return (
      <div className={styles.card}>
        <ul className={styles.list}>
          <li>
            <Link href="/" className={styles.logout}>
              <a>Logout</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  };

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
        <StyledTooltip title="Edit Access" placement="top">
          <IconButton className={styles.iconButton}>
            <FaLock className={styles.falock} />
          </IconButton>
        </StyledTooltip>
        <StyledTooltip title="Account" placement="top">
          <IconButton className={styles.iconButton}>
            <FaUser className={styles.falock} onClick={handleClick} />
          </IconButton>
        </StyledTooltip>
      </div>
      {card && renderComponent()}
    </div>
  );
};

export default Header;
