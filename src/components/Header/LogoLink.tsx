import React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";

interface LogoLinkProps {
  to: string;
}

const StyledLink = styled(Link)`
  ${tw`text-gray-700 font-sans text-2xl font-bold`}
`;

const LogoLink: React.FC<LogoLinkProps> = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default LogoLink;
