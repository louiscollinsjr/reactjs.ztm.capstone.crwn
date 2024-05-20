import CategoryList from '../../components/category-list/category-list.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'caps',
      imageUrl:
        'https://cdn.midjourney.com/03bea807-bf54-48a6-8537-3cfd43a95356/0_2.png',
    },
    {
      id: 2,
      title: 'outter wear',
      imageUrl:
        'https://cdn.midjourney.com/e6b0f2e9-5c7d-40ff-8e3b-56bff67dfda3/0_2.png',
    },
    {
      id: 3,
      title: 'running',
      imageUrl:
        'https://cdn.midjourney.com/426df441-dd48-4f5a-8229-36d664c6e3ca/0_2.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl:
        'https://cdn.midjourney.com/89b8d92a-0e6d-4fff-ac01-fcb5fe040041/0_2.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl:
        'https://cdn.midjourney.com/387e1e86-cd63-42ce-a04f-c032c2617a7a/0_0.png',
    },
  ];
  return <CategoryList categories={categories} />;
};

export default Home;
