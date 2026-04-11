'use client';

import dynamic from 'next/dynamic';

const CursorTrail = dynamic(() => import('./CursorTrail'), { ssr: false });

const CursorTrailWrapper = () => {
  return <CursorTrail />;
};

export default CursorTrailWrapper;
