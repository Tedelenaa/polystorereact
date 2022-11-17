export const UserPurchaseHistory = (props) => {
  const { id, product_name, amount, product_description } = props;
  return (
    <>
      <th scope="row">{id}</th>
      <td>{product_name}</td>
      <td>{product_description}</td>
      <td>{amount}</td>
    </>
  );
};
