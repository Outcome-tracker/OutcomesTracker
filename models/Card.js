const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({

    owner: {

        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    name: {

        type: String,
        required: true
    },

    campus: {

        type: {
            type: String,
            default: "Point"
        },
        contry: {
            type: String
        },
        coordinates: {
            type: [Number]
        }
    },

    description: {

        type: String

    },

    images: {

        type: [String],
    }

}, { timestamps: true });


module.exports = mongoose.model("Card", cardSchema);