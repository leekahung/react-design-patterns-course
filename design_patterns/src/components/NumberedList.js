import { Fragment } from "react";

export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <Fragment key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [resourceName]: item }} />
        </Fragment>
      ))}
    </>
  );
};
