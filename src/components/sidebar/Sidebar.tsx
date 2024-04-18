import React, { useContext, useEffect, useRef } from "react";
import { MdOutlineMenu, MdOutlineClose, MdOutlineSettings, MdOutlineLogout, MdOutlineBarChart, MdOutlineAttachMoney, MdOutlineCurrencyExchange, MdOutlineShoppingBag, MdOutlinePeople, MdOutlineMessage, MdOutlineAccountCircle, MdCurrencyLira, MdFormatListBulleted, MdOutlineExitToApp } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoLight from "../../assets/images/logo_light.png";
import LogoDark from "../../assets/images/logo_dark_bg.png";
import MoonIcon from "../../assets/icons/moon.svg";
import SunIcon from "../../assets/icons/sunforbutton.svg";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";
import "./Sidebar.scss";
import { LuPanelLeft } from "react-icons/lu";
import { FaCow } from "react-icons/fa6";
import { GiSheep } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { IoBarChartOutline } from "react-icons/io5";
import { IoMdCalendar } from "react-icons/io";

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
                <LuPanelLeft size={18} />
                </span>
                <span className="menu-link-text">Gösterge Paneli</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineAccountCircle size={20} />
                </span>
                <span className="menu-link-text">Profil</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <MdCurrencyLira size={20} />
                </span>
                <span className="menu-link-text">Hasılat</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <MdFormatListBulleted size={18} />
                </span>
                <span className="menu-link-text">Çiflik Listesi</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <FaCow size={20} />
                </span>
                <span className="menu-link-text">Büyükbaş Hayvanlar</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <GiSheep size={20} />
                </span>
                <span className="menu-link-text">Küçükbaş Hayvanlar</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <MdOutlineExitToApp size={20} />
                </span>
                <span className="menu-link-text">Ayrılan Hayvanlar</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <IoBarChartOutline size={18} />
                </span>
                <span className="menu-link-text">Rasyon</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <GoGraph size={18} />
                </span>
                <span className="menu-link-text">Rapor</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                <IoMdCalendar size={20} />
                </span>
                <span className="menu-link-text">Aşı Takvimi</span>
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
                <span className="menu-link-text">Ayarlar</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Çıkış Yap</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
