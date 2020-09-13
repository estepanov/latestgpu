import React from "react";
import { graphql } from "gatsby";
// import Image from "~/components/Image";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";
// import Hero from "~/components/Hero";
// import Features from "~/components/Features";

import { IndexPageQuery } from "~/gatsby-graphql";
import SectionHeader from "~/components/SectionHeader";
import LandingPageModels from "~/components/LandingPageModels";
import LandingPageSeries from "~/components/LandingPageSeries";
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
        <SectionHeader title="Latest models" />
        <LandingPageModels latestModels={data.recentModels} />
        <SectionHeader title="Latest series" />
        <LandingPageSeries latestSeries={data.recentSeries} />
        <SectionHeader title="Series by designer" />
        <LandingPageDesigners allDesigners={data.allDesigner.nodes} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexPage {
    recentModels {
      id
      name
      releaseDate
      series {
        id
        designer {
          name
          website
          id
          fullSVG {
            publicURL
          }
        }
      }
    }
    recentSeries {
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
