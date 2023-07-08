const { User } = require("../models/users");
const { HttpError, ctrlWrapper } = require("../Helpers");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email, password, subscription });
  if (user) {
    throw new HttpError(
      `User with ${(email, password, subscription)} arleady exist`
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
