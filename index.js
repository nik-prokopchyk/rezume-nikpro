const express = require("express");
const app = express();
const path = require("path")
const port = 3000;

app.use("/assets", express.static("assets"));
app.use(express.json());

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname + "/index.html"))
);

app.listen(port, "0.0.0.0", () =>
  console.log(`Резюме listening at http://localhost:${port}`)
);