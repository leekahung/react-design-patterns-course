export const SmallProduceListItem = ({ produce }) => {
  const { name, price } = produce;
  return (
    <h3>
      {name} - {price}
    </h3>
  );
};
