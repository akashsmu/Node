import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

const app = express();
const port = process.env.PORT || 9000;

const url =
  "mongodb+srv://admin:wl20pRZOdRsA3VZB@cluster0.ep66e.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello World"));

const pusher = new Pusher({
  appId: "1209087",
  key: "39e0484560960626b5c3",
  secret: "8d8963cd6e8da4535226",
  cluster: "ap2",
  useTLS: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB connected");
  const msgCollection = db.collection("messagecontent");
  const changeStream = msgCollection.watch();
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log("Listening"));
