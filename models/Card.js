const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    nombre: {
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

cardSchema.index({
    location: "2dsphere"
});

module.exports = mongoose.model("Card", cardSchema);