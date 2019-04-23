const mongoose = require("mongoose")

const Schema =  mongoose.Schema;

const studentSchema = new Schema(

  {
    student: String,

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

    password:{
      type: String,
      required: true
    },
    
    group:{
      type: String,
      required: true
    },
    image:{
      type: [String],
      required: true
    }
  },

  { timestamps: true }
);


 module.exports = mongoose.model("Student", studentSchema);
