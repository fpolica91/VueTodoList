import mongoose, { Schema } from "mongoose";
const chairSchema = new Schema({
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    required: true
  }
});

export default chairSchema;
