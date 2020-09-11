import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { IndexPageQuery } from "~/gatsby-graphql";

interface LandingPageSeriesProps {
  latestSeries: IndexPageQuery["allSeries"]["nodes"];
}

const LandingPageSeries: React.FC<LandingPageSeriesProps> = ({
  latestSeries,
}) => {
  return (
    <div tw="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
      {latestSeries.map((series) => {
        return (
          <div
            tw="col-span-1 flex flex-col justify-center items-center py-8 px-8 bg-gray-100"
            key={series.name}
          >
            <div>
              {series?.designer?.fullSVG?.publicURL ? (
                <img
                  tw="max-h-12"
                  src={series.designer.fullSVG.publicURL}
                  alt={series.designer.name}
                />
              ) : (
                <div tw="text-3xl font-bold">{series?.designer?.name}</div>
              )}
            </div>
            <div tw="mt-4 text-2xl font-bold text-gray-600">{series.name}</div>
            <div tw="mt-2 text-xl text-gray-500">
              {dayjs(series.releaseDate).format("MMMM D YYYY")}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPageSeries;
