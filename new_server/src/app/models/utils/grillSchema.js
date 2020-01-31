import mongoose, { Schema } from "mongoose";

const grillSchema = new Schema({
  rate: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    required: true,
    default: true
  }
});

export default grillSchema;
