import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { Series, Designer } from "~/gatsby-graphql";
import DataCard from "../DataCard";

export enum DesignerSizes {
  large,
  mini,
}

interface DesignerPageSeriesProps {
  latestSeries: Series[];
  designerId: Designer["id"];
  size?: DesignerSizes;
}

const DesignerPageSeries: React.FC<DesignerPageSeriesProps> = ({
  latestSeries,
  designerId,
  size = DesignerSizes.large,
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
              subTitle={
                size === DesignerSizes.large
                  ? dayjs(series.releaseDate).format("MMMM D YYYY")
                  : undefined
              }
            />
          );
        })}
    </div>
  );
};

export default DesignerPageSeries;
