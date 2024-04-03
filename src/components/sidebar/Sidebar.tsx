import React, { useContext, useEffect, useRef } from "react";
import { MdOutlineMenu, MdOutlineClose, MdOutlineSettings, MdOutlineLogout, MdOutlineBarChart, MdOutlineAttachMoney, MdOutlineCurrencyExchange, MdOutlineShoppingBag, MdOutlinePeople, MdOutlineMessage } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoLight from "../../assets/images/logo_light.png";
import LogoDark from "../../assets/images/logo_dark_bg.png";
import MoonIcon from "../../assets/icons/moon.svg";
import SunIcon from "../../assets/icons/sunforbutton.svg";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";
import "./Sidebar.scss";

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef<HTMLDivElement>(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      (event.target as HTMLElement).className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img width={30} src={theme === LIGHT_THEME ? LogoLight : LogoDark} alt="" />
          <span className="sidebar-brand-text">SHUIHSSYS.</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineMenu size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Statistics</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Payment</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">Transactions</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Products</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Customer</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">Messages</span>
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="sidebar-theme-btn"
          onClick={toggleTheme}
        >
          <img
            width={20}
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
            alt="Theme Toggle"
          />
        </button>
        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
