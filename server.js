const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/api-routes"));

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
