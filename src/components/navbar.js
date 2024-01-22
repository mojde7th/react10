import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../libs/constants";
import React from "react";
function Navbar() {
  return (
    <div className="relative w-[100%]">
      <header className="bg-[#2b2b2b] text-white flex flex-wrap gap-1 py-3 w-[100%] ">
        {navbarLinks.map((item, index) => {
          console.log(item, index);
          return (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive ? "mx-2 text-2xl text-[#f1e941fb]" : "mx-2 text-2xl"
              }
            >
              <React.Fragment>{item.title}</React.Fragment>
            </NavLink>
          );
        })}
      </header>
    </div>
  );
}

export default Navbar;
