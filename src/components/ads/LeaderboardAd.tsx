import React from "react";
import { Helmet } from "react-helmet";

const LeaderboardAd: React.FC = () => {
  return (
    <>
      <Helmet>
        <script async src="https://cdn.contextcue.com/adsbycontextcue.js" />
      </Helmet>
      <ins
        className="adsbycontextcue"
        data-cc-site="d1ab5b1a-222c-4977-aee0-01521e92ffcb"
        data-cc-slot="9u0dHZJqz"
        style={{ width: 782, height: 90 }}
      />
    </>
  );
};

export default LeaderboardAd;
