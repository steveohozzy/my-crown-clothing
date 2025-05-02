import DirectoryItem from '../directoryItem/DirectoryItem';
import { CategoriesContainer } from './categoriesStyles';

const categories = [
    {
      id: 1,
      title: "hats",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: 'shop/hats'
    },
    {
      id: 2,
      title: "jackets",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: 'shop/jackets'
    },
    {
      id: 3,
      title: "sneakers",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: 'shop/sneakers'
    },
    {
      id: 4,
      title: "womens",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: 'shop/womens'
    },
    {
      id: 5,
      title: "mens",
      subtitle: "Shop Now",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: 'shop/mens'
    }
]

const Categories = () => {  
    return (
        <CategoriesContainer>
            {categories.map((category) => {
                return (
                <DirectoryItem category={category} key={category.id} />
                )
            })}
        </CategoriesContainer>
    )
}

export default Categories
