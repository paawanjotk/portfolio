import React from "react";
import Link from "./Link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex gap-10  items-center justify-center text-lg font-medium ">
      <Link href={"/"} isActive={location.pathname == "/"}>
        Home
      </Link>
      <Link href={"/about"} isActive={location.pathname == "/about"}>
        About
      </Link>
      <Link href={"/education"} isActive={location.pathname == "/education"}>
        Education
      </Link>
      <Link href={"/projects"} isActive={location.pathname == "/projects"}>
        Projects
      </Link>
      <Link href={"/skills"} isActive={location.pathname == "/skills"}>
        Skills
      </Link>
    </div>
  );
};

export default Navbar;
