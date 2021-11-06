import express from "express";
import mongoose from "mongoose";
import dbCards from "./dbCards.js";
import cors from "cors";

//ISTi9hkkTAhNaiHG

const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:ISTi9hkkTAhNaiHG@cluster0.7nhzm.mongodb.net/tinderDb?retryWrites=true&w=majority`;

app.use(express.json());
app.use(cors());

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  dbCards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  dbCards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on localhost : ${port}`);
});
