import app from "./app";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/grillBer", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.listen(5000);
