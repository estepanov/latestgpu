import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { Designer, Models, Series } from "~/gatsby-graphql";
import { Link } from "gatsby";

interface SeriesPageModelsProps {
  latestModels: Models[];
  designerId: Designer["id"];
  seriesId: Series["id"];
}

const SeriesPageModels: React.FC<SeriesPageModelsProps> = ({
  latestModels,
  seriesId,
  designerId,
}) => {
  if (!latestModels || !latestModels.length) {
    return <div>Sorry, we dont have this data yet!</div>;
  }
  return (
    <div tw="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
      {latestModels
        .sort((a, b) => {
          const second = new Date(b.releaseDate);
          const first = new Date(a.releaseDate);
          const direction = second.getTime() - first.getTime();
          return direction;
        })
        .map((model) => {
          return (
            <Link
              to={`/${designerId}/${seriesId}/${model.fields.slug}`}
              tw="col-span-1 flex flex-col justify-center items-center py-8 px-8 bg-gray-100"
              key={model.name}
            >
              <div tw="mt-4 lg:text-2xl sm:text-xl text-xl text-center font-bold text-gray-600">
                {model.name}
              </div>
              <div tw="mt-2 text-xl text-center text-gray-500">
                {dayjs(model.releaseDate).format("MMMM D YYYY")}
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SeriesPageModels;
