const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5001;

app.use(express.json()); //req.body
app.use(cors());

// Routes

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
