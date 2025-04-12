import './categoryItem.scss';

const CategoryItem = ({category}) => {
    const {title, subtitle, imageUrl, additionalClass} = category;
    return (
        <div className={`category-container ${additionalClass}`}>
            <img src={imageUrl} alt={title} className="background-image" />
            <div className="category-body-container">
                <h2>
                    {title}
                </h2>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default CategoryItem
