const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");

// ROUTE
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const movieRoute = require("./routes/movie.route");
const listRoute = require("./routes/list.route");

// config env
dotenv.config();
const PORT = process.env.PORT || 5000;

// connected to db
const connectedDB = require("./db/connect");
connectedDB();

// middleware
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

// listen app
app.listen(PORT, () => {
  console.log(`listening app : http://localhost:${PORT} `);
});
