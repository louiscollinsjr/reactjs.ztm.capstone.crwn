import CategoryList from './components/category-list/category-list.component';

const App = () => {
  const categories = [ {
    id: 1,
    title: 'caps',
    imageUrl: 'https://cdn.midjourney.com/36a3ae24-af81-4492-9915-a31409da887c/0_0.png',
  },
  {
    id: 2,
    title: 'outter wear',
    imageUrl: 'https://cdn.midjourney.com/e6b0f2e9-5c7d-40ff-8e3b-56bff67dfda3/0_2.png',
  },
  {
    id: 3,
    title: 'running',
    imageUrl: 'https://cdn.midjourney.com/426df441-dd48-4f5a-8229-36d664c6e3ca/0_2.png',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://cdn.midjourney.com/b0abf0ce-7902-498c-9752-abbda2943d69/0_1.png',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://cdn.midjourney.com/bd2f5174-5712-4311-a072-1c2f5c7abc8c/0_1.png',
  },

]
  return <CategoryList categories={categories}/>

};

export default App;
