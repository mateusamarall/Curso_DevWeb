const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
  },
  idade: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
