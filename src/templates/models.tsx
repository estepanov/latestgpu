import React from "react";
import { graphql } from "gatsby";
import dayjs from "dayjs";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";
import DetailHero from "~/components/DetailHero";

import { ModelsPageQuery } from "~/gatsby-graphql";
import DesignerPageSeries, {
  DesignerSizes,
} from "~/components/DesignerPageSeries";
import HeadlineStats from "~/components/HeadlineStats";
import SectionHeader from "~/components/SectionHeader";
import LeaderboardAd from "~/components/ads/LeaderboardAd";

interface IndexPageProps {
  data: ModelsPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <SEO
        title={`${data?.models?.name} - ${data.models.series.name} - ${data.models.series.designer.name}`}
      />
      <DetailHero
        designer={data?.models?.series?.designer}
        series={data?.models?.series}
      />
      <div tw="container">
        <div>
          <h1 tw="text-3xl text-gray-800 font-bold inline-block">
            {data?.models?.name}
          </h1>
          <div tw="text-lg text-gray-600">
            {dayjs(data?.models?.releaseDate).format("MMMM D YYYY")}
          </div>
        </div>
        <HeadlineStats
          headline="The top line!"
          subtitle="The details you care about"
          stats={[
            {
              title: `Boost Clock Speed`,
              value: `${data.models.clockSpeeds.boostCoreClock} GHz`,
            },
            {
              title: `Base Clock Speed`,
              value: `${data.models.clockSpeeds.baseCoreClock} GHz`,
            },
            {
              title: `${data.models.memory.standardConfigSpec} Memory`,
              value: `${data.models.memory.standardConfigSizeGB} GB`,
            },
          ]}
        />
        <div tw="mt-32" />
        <SectionHeader
          title={`Other ${data.models.series.designer.name} Series`}
        />
        <DesignerPageSeries
          size={DesignerSizes.mini}
          latestSeries={data.models.series.designer.series?.filter(
            ({ id }) => id !== data.models.series.id
          )}
          designerId={data.models.series.designer.id}
        />
      </div>
      <LeaderboardAd />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ModelsPageQuery($slug: String!) {
    models(fields: { slug: { eq: $slug } }) {
      id
      name
      releaseDate
      fields {
        slug
      }
      gpuEngine {
        nvidiaCUDACores
      }
      clockSpeeds {
        baseCoreClock
        boostCoreClock
        memory
      }
      memory {
        interfaceBandwidth
        standardConfigSizeGB
        standardConfigSpec
      }
      monitorCount
      series {
        id
        name
        releaseDate
        designer {
          id
          name
          website
          fullSVG {
            publicURL
          }
          series {
            id
            name
            releaseDate
          }
        }
      }
    }
  }
`;
export default IndexPage;
