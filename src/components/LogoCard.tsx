import React from "react";
import "twin.macro";
import { Link } from "gatsby";

interface LogoCardProps {
  to: string;
  logo?: string;
  logoAlt?: string;
  title?: string;
  subTitle?: string;
}

const LogoCard: React.FC<LogoCardProps> = ({
  to,
  logo,
  logoAlt,
  title,
  subTitle,
}) => {
  return (
    <Link
      to={to}
      tw="col-span-1 flex flex-col justify-between items-center md:py-8 py-4 md:px-8 px-4 bg-gray-100 text-gray-300 no-underline hover:bg-gray-200 focus:bg-gray-200 transition-all duration-200 ease-in-out"
    >
      {logo ? (
        <img tw="max-h-16" src={logo} alt={logoAlt} />
      ) : logoAlt ? (
        <div tw="text-3xl font-bold">{logoAlt}</div>
      ) : null}
      {title && (
        <div tw="my-2 lg:text-2xl sm:text-xl text-base text-center font-bold text-gray-600">
          {title}
        </div>
      )}
      {subTitle && (
        <div tw="my-2 md:text-xl text-sm text-center text-gray-500">
          {subTitle}
        </div>
      )}
    </Link>
  );
};

export default LogoCard;
