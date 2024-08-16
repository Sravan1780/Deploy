require('dotenv').config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello dude");
});
app.get("/login", (req, res) => {
    res.send("hello login");
});

app.listen(process.env.PORT, (req, res) => {
    console.log("Server is running on port 3000");
})
