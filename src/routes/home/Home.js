import Categories from "../../components/categories/Categories";

const Home = () => {

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
    <div>
        <Categories categories={categories}/>
    </div>
  );
}

export default Home;
