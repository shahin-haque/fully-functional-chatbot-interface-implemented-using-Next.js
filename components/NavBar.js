import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        Logo
      </Link>
      <div className="nav-links">
        <button>Home</button>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      <div className="profile-tab">XB</div>
    </nav>
  );
};

export default NavBar;
