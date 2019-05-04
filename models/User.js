const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema(

    {
        username: String,

        name: {
            type: String,
            required: true
        },

        lastname: {
            type: String,
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        group: {
            type: String,
        },

        img: {
            type: String,
        },

        role: {
            type: String,
            enum: ['STUDENT', 'OUTCOMESLEAD', 'OUTCOMESMANAGER'],
            default: 'STUDENT'
        },

        campus: {
            type: String,
        },

        squad: {
            type: String
        },

        skill1: String,
        skill2: String,
        skill3: String,
        skill4: String,
        skill5: String,
        skill6: String,
        skill7: String,
        skill8: String,
        skill9: String,
        skill10: String,
        skill11: String,
        skill12: String,
        skill13: String,
        skill14: String,
        skill15: String,
        skill16: String,
        skill17: String,
        skill18: String,
        skill19: String,
        skill20: String,
        skill21: String,
        skill22: String,
        skill23: String,
        skill24: String,
        skill25: String,


        displayName: String
    },

    { timestamps: true }
);

//poner cual sera el campo para inicar sesion y el campo del hash de la contarseña
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
    hashField: "password"
});

module.exports = mongoose.model("User", userSchema);