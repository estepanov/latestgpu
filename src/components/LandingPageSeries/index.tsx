import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { IndexPageQuery } from "~/gatsby-graphql";
import { Link } from "gatsby";

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
          <Link
            to={`/${series.designer?.id}`}
            tw="col-span-1 flex flex-col justify-center items-center py-8 px-8 bg-gray-100 text-gray-300 no-underline"
            key={series.name}
          >
            {series?.designer?.fullSVG?.publicURL ? (
              <img
                tw="max-h-12"
                src={series.designer.fullSVG.publicURL}
                alt={series.designer.name}
              />
            ) : (
              <div tw="text-3xl font-bold">{series?.designer?.name}</div>
            )}
            <div tw="mt-4 lg:text-2xl sm:text-xl text-xl text-center font-bold text-gray-600">
              {series.name}
            </div>
            <div tw="mt-2 text-xl text-center text-gray-500">
              {dayjs(series.releaseDate).format("MMMM D YYYY")}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LandingPageSeries;
