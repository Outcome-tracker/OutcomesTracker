const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobpostSchema = new Schema ({

    //schema details


}, 

{timestamps: true}

);

module.exports = mongoose.model("Jobpost", jobpostSchema);


