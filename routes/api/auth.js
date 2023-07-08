const express = require("express");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

const ctrl = require("../../controllers/authControllers");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

module.exports = router;
