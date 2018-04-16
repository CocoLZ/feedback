const express = require("express");
// express app
const app = express();

// route handler
app.get("/", (req, res) => {
  res.send({ hi: "Coco" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
