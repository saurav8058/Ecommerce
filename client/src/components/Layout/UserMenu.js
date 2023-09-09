import React from "react";
import { NavLink } from "react-router-dom";
import {MdOutlineDashboard,MdOutlineSupervisedUserCircle,MdShoppingCartCheckout} from "react-icons/md"
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4><MdOutlineDashboard/>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
           <MdOutlineSupervisedUserCircle/> Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
          <MdShoppingCartCheckout/> Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
