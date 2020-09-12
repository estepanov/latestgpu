import React from "react";
import { graphql } from "gatsby";
// import Image from "~/components/Image";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";
// import Hero from "~/components/Hero";
// import Features from "~/components/Features";

import { DesignerPageQuery } from "~/gatsby-graphql";
import DesignerPageSeries from "~/components/DesignerPageSeries";
// import LandingPageSeries from "~/components/LandingPageSeries";

interface IndexPageProps {
  data: DesignerPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <SEO title={`${data.designer.name}`} />
      {/* <Hero /> */}
      {/* <Features /> */}
      <div tw="container">
        <div tw="flex flex-wrap items-center">
          {data.designer?.fullSVG?.publicURL && (
            <img
              tw="max-w-xs"
              src={data.designer.fullSVG.publicURL}
              alt={data.designer.name}
            />
          )}
        </div>
        <DesignerPageSeries
          designerId={data.designer.id}
          latestSeries={data.designer.series}
        />
        {/* <LandingPageSeries latestSeries={data.allSeries.nodes} /> */}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query DesignerPageQuery($id: String!) {
    designer(id: { eq: $id }) {
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
      models {
        id
        name
        releaseDate
      }
    }
  }
`;
export default IndexPage;
