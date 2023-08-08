import React from "react";
import styles from "./styles.module.scss";
import CustomizableTable from "@Components/customizeTable/CustomizableTable";

const UserList = () => {
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        sort: false,
      },
    },
    {
      name: "role",
      label: "Role",
      options: {
        sort: false,
      },
    },
  ];

  const title = "User Info";

  const data = [
    {
      name: "Ramkumar",
      role: "admin",
    },
    {
      name: "Navin kumar",
      role: "read only",
    },
    {
      name: "Asraf Ali",
      role: "read only",
    },
    {
      name: "Riyaz Ali",
      role: "admin",
    },
    {
      name: "Shivakumar",
      role: "customer",
    },
    {
      name: "Suriya",
      role: "admin",
    },
    {
      name: "Vijay A",
      role: "admin",
    },
    {
      name: "Prakash raj",
      role: "customer",
    },
    
  ];

  let columnsWithAction = columns;

  return (
    <div className={styles.Table}>
      <div className={styles.TableContainer}>
        <CustomizableTable
          columnsWithAction={columnsWithAction}
          data={data}
          title={title}
        />
      </div>
    </div>
  );
};

export default UserList;
