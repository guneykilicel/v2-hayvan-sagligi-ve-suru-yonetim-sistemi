import React, { useEffect, useRef, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AreaTableAction: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list">
              <li className="dropdown-menu-item">
                <Link to="/view" className="dropdown-menu-link">
                  View
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link to="/view" className="dropdown-menu-link">
                  Edit
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link to="/view" className="dropdown-menu-link">
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default AreaTableAction;
