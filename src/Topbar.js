import React from "react";
import { FaBell } from "react-icons/fa";

function Topbar() {

  return (
    <div className="topbar">

      <input
        className="search"
        placeholder="Search wardrobe, outfits, or trends..."
      />

      <div className="user">

        <FaBell className="bell" />

        <div className="profile">

          <div className="avatar"></div>

          <div>
            <h4>Guest User</h4>
            <p>STANDARD ACCOUNT</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;