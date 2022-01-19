const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5001;

app.use(express.json()); //req.body
app.use(cors());

// Routes
// register and login routes
app.use("/auth", require("./routes/jwtAuth"));

// dashboard route
app.use("/dashboard", require("./routes/dashboard"));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
