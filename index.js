const express = require("express");
const data = require("./data");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
