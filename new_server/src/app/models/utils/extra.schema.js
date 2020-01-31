import mongoose, { Schema } from "mongoose";
import tableSchema from "./subs/table.schema";
import chairSchema from "./subs/chair.schema";
import turfSchema from "./subs/turf.schema";
const addOns = new Schema({
  table: {
    type: tableSchema
  },
  chair: {
    type: chairSchema
  },
  turf: {
    type: turfSchema
  }
});

export default addOns;
