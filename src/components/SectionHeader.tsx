import React from "react";
import "twin.macro";

interface SectionHeaderProps {
  title: string;
  text?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text }) => {
  return (
    <div tw="py-5 border-b border-gray-200 space-y-2 mb-5">
      <h3 tw="sm:text-xl text-lg leading-6 font-medium text-gray-900">
        {title}
      </h3>
      {text && <p tw="max-w-4xl text-sm leading-5 text-gray-500">{text}</p>}
    </div>
  );
};

export default SectionHeader;
