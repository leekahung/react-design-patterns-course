import { SmallPersonListItem } from "./components/people/SmallPersonListItem";
import { LargePersonListItem } from "./components/people/LargePersonListItem";
import { RegularList } from "./components/RegularList";
import { SplitScreen } from "./components/SplitScreen";
import { NumberedList } from "./components/NumberedList";
import { LargeProduceListItem } from "./components/produce/LargeProduceListItem";
import { SmallProduceListItem } from "./components/produce/SmallProduceListItem";
import { Modal } from "./components/Modal";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: "red" }}>{message}</p>;
};

function App() {
  const people = [
    { name: "Alice", age: 20, hobbies: ["read", "write"], hairColor: "black" },
    { name: "Bob", age: 25, hobbies: ["cook", "climb"], hairColor: "orange" },
    { name: "Carl", age: 27, hobbies: ["eat", "sleep"], hairColor: "brown" },
  ];

  const produce = [
    {
      name: "Apple",
      price: "$0.75",
      amount: 4,
      description: "Fetched From farm",
    },
    {
      name: "Banana",
      price: "$0.50",
      amount: 3,
      description: "Imported from island",
    },
    {
      name: "Candy",
      price: "$0.25",
      amount: 10,
      description: "Bought from local manufacturer",
    },
  ];

  return (
    <div>
      <Modal>
        <LargeProduceListItem produce={produce[0]} />
      </Modal>
      {/* <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={produce}
        resourceName="produce"
        itemComponent={SmallProduceListItem}
      />
      <NumberedList
        items={produce}
        resourceName="produce"
        itemComponent={LargeProduceListItem}
      />
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Alice" />
        <RightHandComponent message="Hello" />
      </SplitScreen> */}
    </div>
  );
}

export default App;
