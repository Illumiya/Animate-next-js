import { createContext } from "react";

const initialState = {
  isNavOpen: false,
  toggleNav: () => {},
};

const NavContext = createContext(initialState);

export default NavContext;
