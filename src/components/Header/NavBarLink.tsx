import React from "react";
import tw, { css } from "twin.macro";

import { Link } from "gatsby";

interface NavBarLinkProps {
  to: string;
  isMobile?: boolean;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({
  children,
  to,
  isMobile = false,
}) => {
  return (
    <Link
      to={to}
      css={css`
        ${tw`
          transition duration-150 ease-in-out px-3 py-2 rounded-md font-medium text-white outline-none
          focus:shadow-outline focus:text-white focus:bg-blue-700
        `}
        ${isMobile ? tw`block text-base` : tw`text-sm font-medium leading-5`}
      `}
      activeStyle={tw`text-blue-800 bg-blue-100`}
    >
      {children}
    </Link>
  );
};

export default NavBarLink;
