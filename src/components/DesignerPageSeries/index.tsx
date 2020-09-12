import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { Series, Designer } from "~/gatsby-graphql";
import DataCard from "../DataCard";

interface DesignerPageSeriesProps {
  latestSeries: Series[];
  designerId: Designer["id"];
}

const DesignerPageSeries: React.FC<DesignerPageSeriesProps> = ({
  latestSeries,
  designerId,
}) => {
  return (
    <div tw="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-8">
      {latestSeries
        .sort((a, b) => {
          const second = new Date(b.releaseDate);
          const first = new Date(a.releaseDate);
          const direction = second.getTime() - first.getTime();
          return direction;
        })
        .map((series) => {
          return (
            <DataCard
              to={`/${designerId}/${series.id}`}
              key={series.name}
              title={series.name}
              subTitle={dayjs(series.releaseDate).format("MMMM D YYYY")}
            />
          );
        })}
    </div>
  );
};

export default DesignerPageSeries;
