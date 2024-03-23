import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
      <div className="profile-tab">Profile</div>
    </nav>
  );
};

export default NavBar;
