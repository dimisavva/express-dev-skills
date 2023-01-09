import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
  type: String,
  dimiKnows: Boolean,
})

const Skill = mongoose.model('Skill', skillSchema)


export {
  Skill
}