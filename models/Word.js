import mongoose from "mongoose";

const WordSchema = new mongoose.Schema({
  word_tr: String,
  word_en: String,
  explaination_tr: String,
  explaination_en: String,
});

export default mongoose.models.Word || mongoose.model("Word", WordSchema);
