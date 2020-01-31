import mongoose, { Schema } from "mongoose";

const turfSchema = new Schema({
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    required: true
  }
});

export default turfSchema;
