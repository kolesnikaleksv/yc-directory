import { sanityFetch } from '@/sanity/lib/live';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import React from 'react';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const { data: post } = await sanityFetch({
    query: STARTUP_BY_ID_QUERY,
    params: await params,
  });
  console.log(post, null, 2);
  return (
    <>
      <h1 className="text-2xl">This number is id of the page {id}</h1>
    </>
  );
};

export default page;
