'use client';

import dynamic from 'next/dynamic';

const PageRevealLoader = dynamic(() => import('./PageRevealLoader'), { ssr: false });

const PageRevealWrapper = () => {
  return <PageRevealLoader />;
};

export default PageRevealWrapper;
