const { User } = require("../models/users");
const ctrlWrapper = require("../Helpers/ctrlWrapper");
const { HttpError } = require("../Helpers/HttpError");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email, password, subscription });
  if (user) {
    throw HttpError(
      409,
      `User with ${email}, ${password}, ${subscription} already exists`
    );
  }
  const result = await User.create({ email, password, subscription });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
