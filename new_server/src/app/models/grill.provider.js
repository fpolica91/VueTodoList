import mongoose, { Schema } from "mongoose";
import LocationSchema from "./utils/location.schema";

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: LocationSchema,
    index: "2dsphere"
  }
});

const Admin = mongoose.model("admins", adminSchema);

export default Admin;
