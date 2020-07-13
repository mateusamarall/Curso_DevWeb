const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { nome, cidade, idade } = req.body;
    const user = await User.create({ nome, cidade, idade });

    return res.json(user);
  },
};
