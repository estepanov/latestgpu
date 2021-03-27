import React from "react";
import { graphql } from "gatsby";
import dayjs from "dayjs";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";

import { SeriesPageQuery } from "~/gatsby-graphql";
import SeriesPageModels from "~/components/SeriesPageModels";
import DetailHero from "~/components/DetailHero";
import LeaderboardAd from "~/components/ads/LeaderboardAd";

interface IndexPageProps {
  data: SeriesPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <SEO title={`${data?.series?.name} - ${data?.series.designer?.name}`} />
      <DetailHero designer={data.series.designer} />
      <div tw="container">
        <div>
          <h1 tw="text-3xl text-gray-800 font-bold">{data?.series?.name}</h1>
          <div tw="text-lg text-gray-600">
            {dayjs(data?.series?.releaseDate).format("MMMM D YYYY")}
          </div>
        </div>
        <SeriesPageModels
          latestModels={data.series.models}
          designerId={data.series.designer.id}
          seriesId={data.series.id}
        />
      </div>
      <LeaderboardAd />
    </Layout>
  );
};

export const pageQuery = graphql`
  query SeriesPageQuery($id: String!) {
    series(id: { eq: $id }) {
      id
      name
      website
      releaseDate
      designer {
        id
        name
        website
        fullSVG {
          publicURL
        }
      }
      models {
        id
        name
        releaseDate
        fields {
          slug
        }
      }
    }
  }
`;
export default IndexPage;
