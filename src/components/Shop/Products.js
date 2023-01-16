import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

// DUMMY DATA
const dummy_data = [
  {
    id: "b1",
    title: "First book",
    description: "My first book",
    price: 15.99,
  },
  {
    id: "b2",
    title: "Second book",
    description: "My second book",
    price: 19.99,
  },
];

const Products = () => {
  // DISPLAYING THE DUMMY DATA THROUGH A CHILD COMPONENT <ProductItem/>
  const item = dummy_data.map((item) => {
    return (
      <ProductItem
        key={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        id={item.id}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{item}</ul>
    </section>
  );
};

export default Products;
