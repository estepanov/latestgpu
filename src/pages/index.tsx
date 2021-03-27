import React from "react";
import { graphql } from "gatsby";
import Layout from "~/components/Layout";
import SEO from "~/components/SEO";
import "twin.macro";

import { IndexPageQuery } from "~/gatsby-graphql";
import SectionHeader from "~/components/SectionHeader";
import LandingPageModels from "~/components/LandingPageModels";
import LandingPageSeries from "~/components/LandingPageSeries";
import LandingPageDesigners from "~/components/LandingPageDesigner";
import LeaderboardAd from "~/components/ads/LeaderboardAd";

interface IndexPageProps {
  data: IndexPageQuery;
  location: Location;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <SEO title="Home" />
      <LeaderboardAd />
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
      fields {
        slug
      }
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
