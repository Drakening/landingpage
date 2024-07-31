import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineComment, AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <AiOutlineHome /> },
    { text: "About", icon: <AiOutlineInfoCircle /> },
    { text: "Testimonials", icon: <AiOutlineComment /> },
    { text: "Contact", icon: <AiOutlinePhone /> },
    { text: "Cart", icon: <AiOutlineShoppingCart /> },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles["nav-logo-container"]}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles["navbar-links-container"]}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#cart">
          <BsCart2 className={styles["navbar-cart-icon"]} />
        </a>
        <button className={styles["primary-button"]}>Bookings Now</button>
      </div>
      <div className={styles["navbar-menu-container"]}>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {openMenu && (
        <motion.div
          className={styles.drawer}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
        >
          {menuOptions.map((item) => (
            <div key={item.text} onClick={() => setOpenMenu(false)}>
              <div>{item.icon}</div>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
