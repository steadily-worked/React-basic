import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "First Book",
    price: 6,
    description: "This is a First Book",
  },
  {
    id: "p2",
    title: "Second Book",
    price: 6,
    description: "This is a Second Book",
  },
  {
    id: "p3",
    title: "Third Book",
    price: 6,
    description: "This is a Third Book",
  },
  {
    id: "p4",
    title: "Fourth Book",
    price: 6,
    description: "This is a Fourth Book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
