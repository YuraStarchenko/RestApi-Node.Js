const HttpError = require("../Helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      return next(new Error("Missing fields"));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message));
    }

    next();
  };
  return func;
};

module.exports = validateBody;
