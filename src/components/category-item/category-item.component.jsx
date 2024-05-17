import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;

    console.log(category);
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <div className="category-body-container">
        <h2>{title}</h2>
      </div> */}
      <div className="shop-category-btn">
        <button className='cta-btn'>{title}</button>
      </div>
    </div>
  );
};

export default CategoryItem;
