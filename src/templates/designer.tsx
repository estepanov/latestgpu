import React from "react";
import { graphql } from "gatsby";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";
import DetailHero from "~/components/DetailHero";

import { DesignerPageQuery } from "~/gatsby-graphql";
import DesignerPageSeries from "~/components/DesignerPageSeries";

interface IndexPageProps {
  data: DesignerPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <SEO title={`${data.designer.name}`} />
      <DetailHero designer={data.designer} />
      <div tw="container">
        <DesignerPageSeries
          designerId={data.designer.id}
          latestSeries={data.designer.series}
        />
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
