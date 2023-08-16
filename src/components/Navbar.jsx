import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav_inner container_main">
          <div className="logo">Moses_logo</div>
          <div className="nav_right">
            <div className="menu_list">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="action_btns">
              <button>Login</button>
              <button>Enroll Now</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
