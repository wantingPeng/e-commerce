import { Link } from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <div className="category__container" key={category.id}>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${category.imageUrl})` }}
          />
          <div className="category__text">
            {/* <h2>{category.title} </h2>  */}
            <Link className="title" to={`/shop/${category.title}`}>
              {category.title}
            </Link>

            <Link to="/shop">Shop Now</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
