import CategoryItem from '../../components/categoryItem/CategoryItem';
import './categories.scss';

const Categories = () => {
    const categories = [
        {
          "id": 1,
          "title": "hats",
          "subtitle": "Shop Now",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          "id": 2,
          "title": "jackets",
          "subtitle": "Shop Now",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "sneakers",
          "subtitle": "Shop Now",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "womens",
          "subtitle": "Shop Now",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
          "additionalClass": "large"
        },
        {
          "id": 5,
          "title": "mens",
          "subtitle": "Shop Now",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
          "additionalClass": "large"
        }
    ]  

    return (
        <div className="categories-container">
            {categories.map((category) => {
                return (
                <CategoryItem category={category} key={category.id} />
                )
            })}
        </div>
    )
}

export default Categories
