import { Combobox } from "@headlessui/react";
import { ChangeEvent, Fragment, KeyboardEvent, useState } from "react";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

export function MyCombobox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    console.log({
      key: event.key,
    });
  };

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson} as={Fragment}>
      <Combobox.Input
        as="textarea"
        onChange={(event: unknown) =>
          setQuery((event as ChangeEvent<HTMLTextAreaElement>).target.value)
        }
        onKeyDown={onKeyDown}
      />
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person} value={person}>
            {({ active }) => (
              <>
                {active ? ">" : ""}
                {person}
              </>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
