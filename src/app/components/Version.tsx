import * as packageJson from "@/../package.json";
import React from "react";
import "server-only";

const Version: React.FC = () => {
  return (
    <div>
      <p className="text-right">version: {packageJson.version}</p>
    </div>
  );
};

export default Version;