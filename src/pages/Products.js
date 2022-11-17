import { ProductCategoriesCard, ProductsCard } from "../components/Cards";
import prodCat from "../data/productData.json";

const Products = () => {
  return (
    <div>
      <CategoriesSection />
      <FashionSection />
      <ElectronicsSection />
    </div>
  );
};

const CategoriesSection = () => {
  return (
    <section>
      <h2>Categories</h2>
      <div className="container">
        <div className="row">
          {prodCat.product_categories.map((singleProd) => {
            return (
              <div className="col-md-4 col-sm-12" key={singleProd.id}>
                <ProductCategoriesCard {...singleProd} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FashionSection = () => {
  return (
    <section>
      <h2>Fashion</h2>
      <div className="container">
        <div className="row">
          {prodCat.fashion.map((singleProd) => {
            return (
              <div className="col-md-4 col-sm-12" key={singleProd.id}>
                <ProductsCard {...singleProd} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ElectronicsSection = () => {
  return (
    <section>
      <h2>Electronics</h2>
      <div className="container">
        <div className="row">
          {prodCat.electronics.map((singleProd) => {
            return (
              <div className="col-md-4 col-sm-12" key={singleProd.id}>
                <ProductsCard {...singleProd} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
