import { defineQuery } from 'next-sanity';

export const STARTUP_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createAt desc){
  _id,
   title, 
  description, 
  _createdAt,
  slug, 
  views, 
  author -> {
  _id, name, image
  },
  category, 
  image
}`);
