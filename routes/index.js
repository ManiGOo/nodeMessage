const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// Show chat view (default user or selected user)
router.get("/", (req, res) => res.redirect("/chat"));
router.get("/chat/:user", messageController.chat);

// Handle new message
router.post("/new", messageController.create);

module.exports = router;
