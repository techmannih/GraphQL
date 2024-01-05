const peopleData = [
  {
    name: "John Doe",
    age: 25,
    city: "New York",
    friends: [
      { name: "Jane Smith", age: 30, city: "Los Angeles" },
      { name: "Bob Johnson", age: 28, city: "Chicago" },
    ],
  },
  {
    name: "Jane Smith",
    age: 30,
    city: "Los Angeles",
    friends: [
      { name: "John Doe", age: 25, city: "New York" },
      { name: "Bob Johnson", age: 28, city: "Chicago" },
      { name: "Alice Brown", age: 35, city: "Seattle" },
    ],
  },
  {
    name: "Bob Johnson",
    age: 28,
    city: "Chicago",
    friends: [
      { name: "John Doe", age: 25, city: "New York" },
      { name: "Jane Smith", age: 30, city: "Los Angeles" },
      { name: "Charlie Wilson", age: 22, city: "Miami" },
    ],
  },
  {
    name: "Alice Brown",
    age: 35,
    city: "Seattle",
    friends: [
      { name: "Jane Smith", age: 30, city: "Los Angeles" },
      { name: "Charlie Wilson", age: 22, city: "Miami" },
    ],
  },
  {
    name: "Charlie Wilson",
    age: 22,
    city: "Miami",
    friends: [
      { name: "Bob Johnson", age: 28, city: "Chicago" },
      { name: "Alice Brown", age: 35, city: "Seattle" },
    ],
  },
];

module.exports= {peopleData}