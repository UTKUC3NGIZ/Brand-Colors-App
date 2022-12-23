import React from "react";
import ContentLoader from "react-content-loader";

function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={103}
      viewBox="0 0 400 103"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      
    >
      <rect x="-2" y="4" rx="3" ry="3" width="88" height="10" />
      <rect x="2" y="36" rx="0" ry="0" width="70" height="52" />
      <rect x="76" y="36" rx="0" ry="0" width="70" height="52" />
      <rect x="152" y="35" rx="0" ry="0" width="70" height="52" />
    </ContentLoader>
  );
}

export default Loader;
