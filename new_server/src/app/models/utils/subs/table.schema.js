import mongoose, { Schema } from "mongoose";

const tableSchema = new Schema({
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Number,
    required: true
  }
});

export default tableSchema;
