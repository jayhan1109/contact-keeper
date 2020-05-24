const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to ContactKeeper API..." })
);

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
  console.log(`Server is on ${PORT}`);
});
