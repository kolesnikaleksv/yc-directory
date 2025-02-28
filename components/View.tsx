import React from 'react';
import Ping from '@/components/Ping';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  const formanNumber = (views: number): string => {
    return `${views === 1 ? views + ' View' : views + 'Views '} `;
  };

  // TODO: Update the number of views

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">{formanNumber(totalViews)}</span>
      </p>
    </div>
  );
};

export default View;
