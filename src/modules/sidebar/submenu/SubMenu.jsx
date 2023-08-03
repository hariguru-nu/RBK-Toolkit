import React, { useState } from "react";
import styles from "./SubMenu.module.scss";
import Link from "next/link";

const SubMenu = ({ item, sidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div
        className={`${styles.sidebarLink} ${
          sidebar === false ? styles.sidebarLink : styles.sidebarIconLink
        }`}
        onClick={item?.subNav && showSubnav}
      >
        <div className={styles.sidebarItems}>
          {item.icon}
          {sidebar === false && (
            <a className={styles.sidebarLabel} href={item?.path}>
              {item.title}
            </a>
          )}
        </div>
        {sidebar === false && (
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        )}
      </div>
      {subnav &&
        item?.subNav &&
        item.subNav.map((item, index) => {
          return (
            <div className={styles.dropdownLink} to={item.path} key={index}>
              <Link href={item?.path}>{item.icon}</Link>
              <Link className={styles.sidebarLabel} href={item?.path}>
                {item.title}
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;
