// Sidebar.js

import React from 'react';
import './Sidebar.css'; // Import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faHome, faChartBar, faShoppingCart, faBox, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Lizmotors</h1>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
          <span className="sidebar-text">Home</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
          <span className="sidebar-text">Dashboard</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faShoppingCart} className="sidebar-icon" />
          <span className="sidebar-text">Orders</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faBox} className="sidebar-icon" />
          <span className="sidebar-text">Products</span>
        </li>
        <li className="sidebar-item">
          <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
          <span className="sidebar-text">Customers</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
