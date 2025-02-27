import { defineQuery } from 'next-sanity';

export const STARTUP_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search] | order(_createAt desc){
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

export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id, 
  title, 
  description, 
  _createdAt,
  slug, 
  views, 
  author -> {_id, name, username, image},
  category, 
  image,
  pitch
}`);
