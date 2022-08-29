const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// let getData = () => {
//   axios
//     .get(url)
//     .then((res) => usersData.push(res.data))
//     .catch((err) => console.log(err.data));
// };

// getData();

app.get("/api/abandon", (req, res, next) => {
  console.log(JSON.stringify(req.body));
});

app.listen(5000, () => {
  console.log("Backend Up!");
});
