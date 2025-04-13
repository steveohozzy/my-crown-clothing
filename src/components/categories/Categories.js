import CategoryItem from '../../components/categoryItem/CategoryItem';
import './categories.scss';

const Categories = ({categories}) => {  
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
