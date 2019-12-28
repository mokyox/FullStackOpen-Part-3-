import React from "react";

const Persons = ({ persons, searchPersons, deleteUser }) => {
  /* Map over array of objects and display name */
  const personsFilter =
    searchPersons === ""
      ? persons
      : persons.filter(
          person =>
            person.name.toLowerCase().indexOf(searchPersons.toLowerCase()) !==
            -1
        );

  console.log(personsFilter);

  //Remove a user on Click from the backend
  //Use the axios.delete() method onClick
  // Remove the user depending on the id of the person.id

  return (
    <>
      {personsFilter.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
          <button
            onClick={() => {
              deleteUser(person.id, person.name);
            }}
          >
            Delete
          </button>
        </p>
      ))}
    </>
  );
};

export default Persons;
