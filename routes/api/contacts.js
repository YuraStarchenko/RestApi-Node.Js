const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");
const validateFavorite = require("../../middlewares/validateFavorite");

const schemas = require("../../schemas/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavorite,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:contactId", isValidId, ctrl.removeContact);

module.exports = router;
