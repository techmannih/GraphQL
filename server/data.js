const peopleData = [
    {
      name: "John Doe",
      age: 25,
      city: "NEWYORK",
      friends: [
        { name: "Jane Smith", age: 30, city: "LOS ANGELES" },
        { name: "Bob Johnson", age: 28, city: "CHICAGO" },
      ],
    },
    {
      name: "Jane Smith",
      age: 30,
      city: "LOSANGELES",
      friends: [
        { name: "John Doe", age: 25, city: "NEW YORK" },
        { name: "Bob Johnson", age: 28, city: "CHICAGO" },
        { name: "Alice Brown", age: 35, city: "SEATTLE" },
      ],
    },
    {
      name: "Bob Johnson",
      age: 28,
      city: "CHICAGO",
      friends: [
        { name: "John Doe", age: 25, city: "NEW YORK" },
        { name: "Jane Smith", age: 30, city: "LOS ANGELES" },
        { name: "Charlie Wilson", age: 22, city: "MIAMI" },
      ],
    },
    {
      name: "Alice Brown",
      age: 35,
      city: "SEATTLE",
      friends: [
        { name: "Jane Smith", age: 30, city: "LOS ANGELES" },
        { name: "Charlie Wilson", age: 22, city: "MIAMI" },
      ],
    },
    {
      name: "Charlie Wilson",
      age: 22,
      city: "MIAMI",
      friends: [
        { name: "Bob Johnson", age: 28, city: "CHICAGO" },
        { name: "Alice Brown", age: 35, city: "SEATTLE" },
      ],
    },
  ];
  
  module.exports = { peopleData };
  