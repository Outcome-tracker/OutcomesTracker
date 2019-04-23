//Modelo de usuario

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const administratorSchema = new Schema(

  {
    admin: String,

    name:{
      type: String,
      required:true
    },

    lastname:{
      type: String,
    },

    email:{
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model("Administrator", administratorSchema);