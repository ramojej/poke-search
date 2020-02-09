import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={190}
    viewBox="0 0 400 190"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="7" y="21" rx="4" ry="4" width="117" height="6" />
    <rect x="7" y="42" rx="3" ry="3" width="85" height="6" />
    <rect x="7" y="130" rx="3" ry="3" width="350" height="6" />
    <rect x="7" y="148" rx="3" ry="3" width="258" height="6" />
    <rect x="8" y="165" rx="3" ry="3" width="201" height="6" />
    <circle cx="36" cy="88" r="30" />
  </ContentLoader>
);

export default MyLoader;
