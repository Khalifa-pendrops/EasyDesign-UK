const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const formRoute = require("./formRoute");
const newsLetterRoute = require("./newsLetterRoute");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", formRoute);
app.use("/", newsLetterRoute);

const PORT = 5175;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
