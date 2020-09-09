import React from "react";
import { graphql } from "gatsby";
// import Image from "~/components/Image";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
// import Hero from "~/components/Hero";
// import Features from "~/components/Features";

import { IndexPageQuery } from "~/gatsby-graphql";
import LandingPageSeries from "~/components/LandingPageSeries";

interface IndexPageProps {
  data: IndexPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Hero /> */}
      {/* <Features /> */}
      <LandingPageSeries latestSeries={data.allSeriesJson.nodes} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    allSeriesJson(sort: { fields: releaseDate }, limit: 2) {
      nodes {
        fields {
          designer
        }
        name
        releaseDate
        architecture
        website
      }
      distinct(field: fields___designer)
    }
  }
`;
export default IndexPage;
