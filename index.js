import express from "express";

const app = express();
// const PORT = 3000;

app.listen(3000, () => {
    console.log("Server is runnig on port")
});

app.get('/',(req,res) => {
    res.send("Hello from Node API")
});