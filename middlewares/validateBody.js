const HttpError = require("../Helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      if (req.method === "PUT" || req.method === "POST") {
        throw HttpError(400, "missing field");
      } else if (req.method === "PATCH") {
        throw HttpError(400, "missing field favorite");
      }
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
