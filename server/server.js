// src/index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, Server!');
});

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
