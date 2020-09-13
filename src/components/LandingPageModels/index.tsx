import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { IndexPageQuery } from "~/gatsby-graphql";
import DataCard from "../DataCard";

interface LandingPageModelsProps {
  latestModels: IndexPageQuery["allModels"]["nodes"];
}

const LandingPageModels: React.FC<LandingPageModelsProps> = ({
  latestModels,
}) => {
  return (
    <div tw="grid grid-cols-2 gap-2 md:grid-cols-2">
      {latestModels.map((model) => {
        return (
          <DataCard
            to={`/${model.series?.designer?.id}/${model.id}`}
            key={model.name}
            logo={model?.series?.designer?.fullSVG?.publicURL}
            title={model.name}
            subTitle={dayjs(model.releaseDate).format("MMMM D YYYY")}
          />
        );
      })}
    </div>
  );
};

export default LandingPageModels;
