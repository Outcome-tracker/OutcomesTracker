const mongoose = require("mongoose")
const Schema =  mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema(

  {
    username: String, 

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

//poner cual sera el campo para inicar sesion y el campo del hash de la contarseña
userSchema.plugin(passportLocalMongoose, { 
  usernameField: "email", 
  hashField: "password"
});

module.exports = mongoose.model("User", userSchema);
