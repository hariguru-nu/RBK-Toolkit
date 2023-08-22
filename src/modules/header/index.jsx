import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import RbkLogo from "@Assets/images/logo.png";
import StyledTooltip from "@Components/Tooltip";
import IconButton from "@mui/material/IconButton";
import { FaLock, FaUser } from "react-icons/fa";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter} from "next/router";

const Header = () => {
  const [card, setCard] = useState(false);
  const [ViewAccount, setViewAccount] = useState(false);
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    router.push('/');
  };
  const openDatabase = () => {
    router.push('/database');
  }

  // const handleClick = () => {
  //   setCard(!card);
  // };

  // const renderComponent = () => {
  //   return (
  //     <div className={styles.card}>
  //       <ul className={styles.list}>
  //         <li>
  //           <Link href="/" className={styles.logout}>
  //             <a>Logout</a>
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // };
  const style = {
    position: 'absolute',
    top: '20%',
    right: ' -8%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: "10px",
    fontSize: "12px"
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
            <FaLock className={styles.falock} onClick={openDatabase}/>
          </IconButton>
        </StyledTooltip>
        <StyledTooltip title="Account" placement="top">
          <IconButton className={styles.iconButton}>
            <FaUser className={styles.falock} onClick={handleOpen} />
          </IconButton>
        </StyledTooltip>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2>hgurubalan@gmail.com</h2>
          <Button onClick={handleClose}>Logout</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
