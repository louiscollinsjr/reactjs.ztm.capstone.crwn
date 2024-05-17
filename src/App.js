import './App.css';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      subtitle: '',
    },
    {
      id: 1,
      title: 'Jackets',
      subtitle: '',
    },
    {
      id: 1,
      title: 'Sneakers',
      subtitle: '',
    },
    {
      id: 1,
      title: 'Womens',
      subtitle: '',
    },
    {
      id: 1,
      title: 'Mens',
      subtitle: '',
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div key={title.id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2 className="">{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
