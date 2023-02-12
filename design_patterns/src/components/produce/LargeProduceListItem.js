export const LargeProduceListItem = ({ produce }) => {
  const { name, price, amount, description } = produce;

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Amount: {amount}</p>
    </>
  );
};
