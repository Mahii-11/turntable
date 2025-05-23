const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(
  "/turntable-parts",
  express.static(path.join(__dirname, "public/turntable-parts"))
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
