import React from "react";
import { graphql } from "gatsby";
// import Image from "~/components/Image";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";
// import Hero from "~/components/Hero";
// import Features from "~/components/Features";

import { IndexPageQuery } from "~/gatsby-graphql";
import LandingPageSeries from "~/components/LandingPageSeries";
import SectionHeader from "~/components/SectionHeader";
import LandingPageDesigners from "~/components/LandingPageDesigner";

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
      <div tw="container">
        <SectionHeader title="Latest series" />
        <LandingPageSeries latestSeries={data.allSeries.nodes} />
        <SectionHeader title="Series by designer" />
        <LandingPageDesigners allDesigners={data.allDesigner.nodes} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    allSeries(sort: { fields: releaseDate, order: DESC }, limit: 2) {
      nodes {
        designer {
          name
          website
          id
          fullSVG {
            publicURL
          }
        }
        id
        name
        releaseDate
        architecture
        website
      }
      distinct(field: designer___id)
    }
    allDesigner {
      distinct(field: id)
      nodes {
        name
        fullSVG {
          publicURL
        }
        id
      }
    }
  }
`;
export default IndexPage;
