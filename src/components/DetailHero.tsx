import React, { Fragment } from "react";
import tw, { styled } from "twin.macro";
import { Designer, Series } from "~/gatsby-graphql";
import { Link } from "gatsby";

const Container = styled.div`
  ${tw`md:py-5 lg:py-5 sm:py-5 py-5 bg-gradient-b-light-gray`}
`;

interface DetailHeroProps {
  designer: Designer;
  series?: Series;
}

const Hero: React.FC<DetailHeroProps> = ({ designer, series }) => {
  return (
    <Container>
      <div tw="container flex items-center">
        <div tw="inline-block text-4xl font-bold m-0">
          <Link
            to={`/${designer.id}`}
            tw="flex flex-wrap items-center text-gray-600"
          >
            {designer?.fullSVG?.publicURL ? (
              <img
                tw="max-w-32"
                src={designer.fullSVG.publicURL}
                alt={designer.name}
              />
            ) : (
              <Fragment>{designer?.name}</Fragment>
            )}
          </Link>
        </div>
        {series && (
          <div tw="inline-block ml-10">
            <Link
              to={`/${designer.id}/${series.id}`}
              tw="text-2xl text-gray-700 font-bold leading-6"
            >
              {series.name}
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Hero;
