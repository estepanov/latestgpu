import dayjs from "dayjs";
import React from "react";
import "twin.macro";
import { Series, Designer } from "~/gatsby-graphql";
import { Link } from "gatsby";

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
            <Link
              to={`/${designerId}/${series.id}`}
              tw="col-span-1 flex flex-col justify-center items-center py-8 px-8 bg-gray-100"
              key={series.name}
            >
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

export default DesignerPageSeries;
