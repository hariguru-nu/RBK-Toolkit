import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { SidebarData } from "./SidebarData";
import SubMenu from "./submenu/SubMenu";
import { IconContext } from "react-icons/lib";
import styles from "./styles.module.scss";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div
        className={`${styles.sidebarNav} ${
          sidebar === false ? styles.sidebarNav : styles.sidebarMenu
        }`}
      >
        {/* <div className={`${styles.navIcon} ${sidebar ? styles.IconX : styles.IconY}`} to="#">
            <BiMenu onClick={showSidebar} />
          </div> */}
        <div className={styles.sidebarWrap}>
          <div className={styles.navIcon}>
            <MdMenuOpen onClick={showSidebar} />
          </div>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} sidebar={sidebar} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
