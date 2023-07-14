const jwt = require("jsonwebtoken");
const { HttpError } = require("../Helpers");
const { User } = require("../models/user");
const { Joi } = require("joi");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    return next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      return next(HttpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(HttpError(401));
  }
};

module.exports = authenticate;
