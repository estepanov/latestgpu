import React from "react";
import "twin.macro";
import { IndexPageQuery } from "~/gatsby-graphql";

interface LandingPageSeriesProps {
  latestSeries: IndexPageQuery["allSeriesJson"]["nodes"];
}

const LandingPageSeries: React.FC<LandingPageSeriesProps> = ({
  latestSeries,
}) => {
  return (
    <div>
      {latestSeries.map((series) => {
        return (
          <div key={series.name}>
            {series.fields?.designer} - {series.name}
          </div>
        );
      })}
    </div>
  );
};

export default LandingPageSeries;
