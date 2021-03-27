import React from "react";
import { Helmet } from "react-helmet";
import "twin.macro";

const LeaderboardAd: React.FC = () => {
  return (
    <>
      <Helmet>
        <script async src="https://cdn.contextcue.com/adsbycontextcue.js" />
      </Helmet>
      <div tw="flex justify-center items-center py-5">
        <div
          tw="relative border border-gray-200 bg-white"
          style={{ width: 782, height: 90 }}
        >
          <ins
            className="adsbycontextcue"
            data-cc-site="d1ab5b1a-222c-4977-aee0-01521e92ffcb"
            data-cc-slot="9u0dHZJqz"
            style={{ width: 782, height: 90 }}
            tw="absolute inset-0 bg-white"
          />
          <div tw="absolute inset-0 flex justify-center items-center text-xl font-bold tracking-wide text-gray-700">
            Advertisements!
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardAd;
