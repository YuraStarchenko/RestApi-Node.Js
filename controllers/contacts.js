const { HttpError, ctrlWrapper } = require("../Helpers");

const contacts = require("../models/contacts");

const listContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
	}
  res.status(200).json(result);
};

// const updateStatus = async (req, res) => {

// };

// const Contact = require("../models/contactModel");

// const updateStatusContact = async (req, res) => {
//   const { contactId } = req.params;
//   const { favorite } = req.body;

//   try {
//     const updatedContact = await Contact.findByIdAndUpdate(
//       contactId,
//       { favorite },
//       { new: true }
//     );

//     if (!updatedContact) {
//       return res.status(404).json({ message: "Not found" });
//     }

//     return res.status(200).json(updatedContact);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// };

// module.exports = { updateStatusContact };


// const updateStatus = async (req, res, next) => {
//   const { id } = req.params;
//   const { isDone = false } = req.body;

//   try {
//     const result = await service.updateTask(id, { isDone });
//     if (result) {
//       res.json({
//         status: "success",
//         code: 200,
//         data: { task: result },
//       });
//     } else {
//       res.status(404).json({
//         status: "error",
//         code: 404,
//         message: `Not found task id: ${id}`,
//         data: "Not Found",
//       });
//     }
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// };

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
	updateContact: ctrlWrapper(updateContact),
	// updateStatus: ctrlWrapper(updateStatus),
  removeContact: ctrlWrapper(removeContact),
};
