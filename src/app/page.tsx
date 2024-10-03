import React from "react";
import "server-only";
import App from "./components/App";
import Version from "./components/Version";

const Home: React.FC = () => {
  return (
    <>
      <Version />
      <App />
    </>
  );
};

export default Home;
