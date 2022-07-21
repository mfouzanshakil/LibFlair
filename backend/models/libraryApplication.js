import mongoose from "mongoose";

const libraryApplicationStructure = mongoose.Schema({
  userName: String,
  password: String,
});

const libraryApplicationModel = mongoose.model(
  "libraryApplication",
  libraryApplicationStructure
);

export default libraryApplicationModel;
