

// Define a mongoose schema and model for your data
import mongoose, {Schema} from "mongoose";

const csvSchema = new mongoose.Schema({
  "Month": String,
  "1958": String,
  "1959": String,
  "1960": String,
});

export const DataModel = mongoose.model('csv-data', csvSchema);
