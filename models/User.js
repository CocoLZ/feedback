const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({ googleId: String });

// load schema in mongoose
mongoose.model("users", userSchema);
