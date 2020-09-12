import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import dayjs from "dayjs";
// import Image from "~/components/Image";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";
// import Hero from "~/components/Hero";
// import Features from "~/components/Features";

import { ModelsPageQuery } from "~/gatsby-graphql";
import DesignerPageSeries from "~/components/DesignerPageSeries";
import HeadlineStats from "~/components/HeadlineStats";
// import LandingPageSeries from "~/components/LandingPageSeries";

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
      {/* <Hero /> */}
      {/* <Features /> */}
      <div tw="container">
        <Link
          to={`/${data.models.series.designer.id}`}
          tw="flex flex-wrap items-center text-3xl text-gray-600 font-bold"
        >
          {data.models.series.designer?.fullSVG?.publicURL ? (
            <img
              tw="max-w-24"
              src={data.models.series.designer.fullSVG.publicURL}
              alt={data.models.series.designer.name}
            />
          ) : (
            <Fragment>{data?.models.series.designer?.name}</Fragment>
          )}
        </Link>
        <div>
          <Link
            to={`/${data.models.series.designer.id}/${data.models.series.id}`}
            tw="text-2xl text-gray-600 font-bold"
          >
            {data?.models?.series.name}
          </Link>
          <div tw="text-3xl text-gray-800 font-bold">{data?.models?.name}</div>
          <div tw="text-lg text-gray-600">
            {dayjs(data?.models?.releaseDate).format("MMMM D YYYY")}
          </div>
        </div>
        <HeadlineStats
          headline="The top line!"
          subtitle="The details you care about"
          stats={[
            {
              title: "CUDA Cores",
              value: data.models.gpuEngine.nvidiaCUDACores,
            },
            {
              title: `Clock Speed`,
              value: `${data.models.gpuEngine.boostClockGhz} GHz`,
            },
            {
              title: `${data.models.memory.standardConfigSpec} Memory`,
              value: `${data.models.memory.standardConfigSizeGB} GB`,
            },
          ]}
        />
        {/* <DesignerPageSeries latestSeries={data.designer.series} /> */}
        {/* <LandingPageSeries latestSeries={data.allSeries.nodes} /> */}
      </div>
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
        boostClockGhz
        nvidiaCUDACores
      }
      memory {
        interfaceBandwidthBit
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
        }
      }
    }
  }
`;
export default IndexPage;
