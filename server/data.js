// const peopleData.js
const peopleData = [
  {
    id: "1",
    name: "John Doe",
    age: 25,
    city: "NEWYORK",
    friends: [
      { id: "2", name: "Jane Smith", age: 30, city: "LOSANGELES" },
      { id: "3", name: "Bob Johnson", age: 28, city: "CHICAGO" },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 30,
    city: "LOSANGELES",
    friends: [
      { id: "1", name: "John Doe", age: 25, city: "NEWYORK" },
      { id: "3", name: "Bob Johnson", age: 28, city: "CHICAGO" },
      { id: "4", name: "Alice Brown", age: 35, city: "SEATTLE" },
    ],
  },
  {
    id: "3",
    name: "Bob Johnson",
    age: 28,
    city: "CHICAGO",
    friends: [
      { id: "1", name: "John Doe", age: 25, city: "NEWYORK" },
      { id: "2", name: "Jane Smith", age: 30, city: "LOSANGELES" },
      { id: "5", name: "Charlie Wilson", age: 22, city: "MIAMI" },
    ],
  },
  {
    id: "4",
    name: "Alice Brown",
    age: 35,
    city: "SEATTLE",
    friends: [
      { id: "2", name: "Jane Smith", age: 30, city: "LOSANGELES" },
      { id: "5", name: "Charlie Wilson", age: 22, city: "MIAMI" },
    ],
  },
  {
    id: "5",
    name: "Charlie Wilson",
    age: 22,
    city: "MIAMI",
    friends: [
      { id: "3", name: "Bob Johnson", age: 28, city: "CHICAGO" },
      { id: "4", name: "Alice Brown", age: 35, city: "SEATTLE" },
    ],
  },
];

module.exports = { peopleData };
