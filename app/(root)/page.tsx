import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  console.log(await searchParams, 'hello');
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Olexandr' },
      _id: 1,
      description: 'This is a description',
      image:
        'https://variety.com/wp-content/uploads/2024/11/The-Wild-Robot-HTW-Featured.jpg?w=1360&h=906&crop=1',
      category: 'Robots',
      title: 'The wild robot',
    },
  ];
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for ${query}` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
