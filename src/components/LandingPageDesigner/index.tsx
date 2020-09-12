import React from "react";
import "twin.macro";
import { IndexPageQuery } from "~/gatsby-graphql";
import DataCard from "../DataCard";
import LogoCard from "../LogoCard";

interface LandingPageDesignersProps {
  allDesigners: IndexPageQuery["allDesigner"]["nodes"];
}

const LandingPageDesigners: React.FC<LandingPageDesignersProps> = ({
  allDesigners,
}) => {
  return (
    <div tw="grid grid-cols-2 gap-2 md:grid-cols-2">
      {allDesigners.map((designer) => {
        return (
          <LogoCard
            to={`/${designer.id}`}
            logo={designer?.fullSVG?.publicURL}
            key={designer.name}
            // title={designer.name}
          />
        );
      })}
    </div>
  );
};

export default LandingPageDesigners;
