import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();
  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound();

  const { _id, name, username, email, bio, image } = user;

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center line-clamp-1">
              {name}
            </h3>
          </div>
          <Image
            src={image}
            alt={name}
            width={220}
            height={220}
            className="profile_image"
          />
          <p className="text-30-extrabold mt-7 text-center">@{username}</p>
          <p className="mt-1 text-center text-14-normal">{bio}</p>
        </div>
        <div className="flex-1 flex flex-col gap-5 lg:mt-5">
          <p className="text-30-bold">
            {session?.id === id ? 'Your' : 'All'} Statrups
          </p>
          <ul className="cart-grid_sm">{/* TODO: ADD USER_STARTUPS */}</ul>
        </div>
      </section>
    </>
  );
};

export default Page;
