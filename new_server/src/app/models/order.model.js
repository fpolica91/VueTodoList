import mongoose, { Schema } from "mongoose";
import grillSchema from "../models/utils/grillSchema";
import addOns from "../models/utils/extra.schema";

const rentalSchema = new Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  grill: grillSchema,
  addOns: addOns,
  deliveryCost: {
    type: Number
  },
  totalCost: {
    type: Number
  }
});

const Rental = mongoose.model("Rental", rentalSchema);
export default Rental;
