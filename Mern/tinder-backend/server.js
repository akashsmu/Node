import express from "express";
import mongoose from "mongoose";

//ISTi9hkkTAhNaiHG

const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:ISTi9hkkTAhNaiHG@cluster0.7nhzm.mongodb.net/tinderDb?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`listening on localhost : ${port}`);
});
