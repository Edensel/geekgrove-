import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Share & Explore
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Tech-Infused Adventures</span>
    </h1>
    <p className='desc text-center'>
      GeekGrove is your go-to platform for exploring and sharing enriched experiences in the world of technology. It's an open community where learners and professionals can discover, create, and share their insights, experiences, and innovations across various tech disciplines.
    </p>

    <Feed />
  </section>
);

export default Home;
