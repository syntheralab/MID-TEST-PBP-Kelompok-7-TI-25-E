const express = require("express");
const app = express();

app.use(express.json());

app.use("/pendakian", require("./routes/pendakianRoutes"));
app.use("/statistik", require("./routes/statistikRoutes"));

app.listen(3000, () => console.log("Server jalan di http://localhost:3000"));