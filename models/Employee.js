const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: String,
    lastname: String,
    role: {
        type: String,
        enum: ['OUTCOMESLEAD', 'OUTCOMESMANAGER'],
        default: 'OUTCOMESLEAD'

    }
}, { timestamps: true });


module.exports = mongoose.model("employee", employeeSchema);

