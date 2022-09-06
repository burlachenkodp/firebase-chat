import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama chat</span>
      <div className="user">
        <img alt="das" src="https://img.icons8.com/office/30/000000/circled-user-female-skin-type-5.png" />

        <span>Jihn</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
