export const ServicesCard = (props) => {
  const { img, description } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body d-flex flex-column align-items-center">
        <img src={img} alt={description} />
        <p className="card-text mt-3">{description}</p>
      </div>
    </div>
  );
};

export const ProductCategoriesCard = (props) => {
  const { img, category_title, category_description } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{category_title}</h5>
        <p className="card-text">{category_description}</p>
      </div>
    </div>
  );
};
export const ProductsCard = (props) => {
  const { img, fashion_title, fashion_description } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{fashion_title}</h5>
        <p className="card-text">{fashion_description}</p>
      </div>
    </div>
  );
};
