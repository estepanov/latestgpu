import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import dayjs from "dayjs";
// import Image from "~/components/Image";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";
// import Hero from "~/components/Hero";
// import Features from "~/components/Features";

import { SeriesPageQuery } from "~/gatsby-graphql";
import DesignerPageSeries from "~/components/DesignerPageSeries";
import SeriesPageModels from "~/components/SeriesPageModels";
// import LandingPageSeries from "~/components/LandingPageSeries";

interface IndexPageProps {
  data: SeriesPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <SEO title={`${data?.series?.name} - ${data?.series.designer?.name}`} />
      {/* <Hero /> */}
      {/* <Features /> */}
      <div tw="container">
        <Link
          to={`/${data.series.designer.id}`}
          tw="flex flex-wrap items-center text-3xl text-gray-600 font-bold"
        >
          {data.series.designer?.fullSVG?.publicURL ? (
            <img
              tw="max-w-24"
              src={data.series.designer.fullSVG.publicURL}
              alt={data.series.designer.name}
            />
          ) : (
            <Fragment>{data?.designer?.name}</Fragment>
          )}
        </Link>
        <div>
          <div tw="text-3xl text-gray-800 font-bold">{data?.series?.name}</div>
          <div tw="text-lg text-gray-600">
            {dayjs(data?.series?.releaseDate).format("MMMM D YYYY")}
          </div>
        </div>
        <SeriesPageModels
          latestModels={data.series.models}
          designerId={data.series.designer.id}
          seriesId={data.series.id}
        />
        {/* <DesignerPageSeries latestSeries={data.designer.series} /> */}
        {/* <LandingPageSeries latestSeries={data.allSeries.nodes} /> */}
      </div>
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
