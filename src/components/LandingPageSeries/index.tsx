import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { IndexPageQuery } from "~/gatsby-graphql";
import DataCard from "../DataCard";

interface LandingPageSeriesProps {
  latestSeries: IndexPageQuery["allSeries"]["nodes"];
}

const LandingPageSeries: React.FC<LandingPageSeriesProps> = ({
  latestSeries,
}) => {
  return (
    <div tw="grid grid-cols-2 gap-2 md:grid-cols-2">
      {latestSeries.map((series) => {
        return (
          <DataCard
            to={`/${series.designer?.id}/${series.id}`}
            key={series.name}
            logo={series?.designer?.fullSVG?.publicURL}
            title={series.name}
            subTitle={dayjs(series.releaseDate).format("MMMM D YYYY")}
          />
        );
      })}
    </div>
  );
};

export default LandingPageSeries;
