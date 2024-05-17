import CardItem from '../category-item/category-item.component';
import './category-list.styles.scss'


const CategoryList = ({categories}) => {
  return (
    <div className="category-list-container">
      {categories.map((category) => (
        <CardItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
