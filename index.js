const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
require("./server/configs/db.config");

const ProfileRouter = require("./server/routes/profile");
const CharacterRouter = require("./server/routes/character");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/profile", ProfileRouter);
app.use("/api/v1/character", CharacterRouter);

app.get("/", (request, response) => {
  response.status(201).send("server is running...");
});

const PORT = process.env.PORT;
const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));
