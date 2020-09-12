import React from "react";
import "twin.macro";

interface Stat {
  title: string;
  value: string | number;
}

interface HeadlineStatsProps {
  stats: Stat[];
  headline: string;
  subtitle: string;
}

const HeadlineStats: React.FC<HeadlineStatsProps> = ({
  headline,
  subtitle,
  stats,
}) => {
  return (
    <div tw="pt-12 sm:pt-16">
      <div tw="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div tw="max-w-4xl mx-auto text-center">
          <h2 tw="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            {headline}{" "}
          </h2>
          <p tw="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">{subtitle}</p>
        </div>
      </div>
      <div tw="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div tw="max-w-4xl mx-auto">
          <dl tw="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
            {stats.map((stat) => {
              return (
                <div
                  key={stat.title}
                  tw="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                >
                  <dt
                    tw="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    id="item-1"
                  >
                    {stat.title}
                  </dt>
                  <dd
                    tw="order-1 text-5xl leading-none font-extrabold text-indigo-600"
                    aria-describedby="item-1"
                  >
                    {stat.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HeadlineStats;
