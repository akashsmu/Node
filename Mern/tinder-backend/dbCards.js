import { Mongoose } from "mongoose";

const cardSchema = Mongoose.Schema({
  name: String,
  imgUrl: String,
});
