import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { Designer, Models, Series } from "~/gatsby-graphql";
import DataCard from "../DataCard";

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
            <DataCard
              to={`/${designerId}/${seriesId}/${model.fields.slug}`}
              key={model.name}
              title={model.name}
              subTitle={dayjs(model.releaseDate).format("MMMM D YYYY")}
            />
          );
        })}
    </div>
  );
};

export default SeriesPageModels;
