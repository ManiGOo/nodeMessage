
//controller
const Message = require("../models/messageModel");

exports.chat = (req, res) => {
  const users = Message.getUsers();
  if (users.length === 0) {
    return res.send("No users yet!");
  }

  const activeUser = req.params.user || users[0];  // 👈 works for both /chat and /chat/:user
  const chatMessages = Message.getMessageByUser(activeUser);

  res.render("chat", {
    title: "Message App",
    users,
    activeUser,
    messages: chatMessages
  });
};
exports.create = (req, res) => {
  const { author, messageText } = req.body;
  Message.addMessage(author, messageText);
  res.redirect(`/chat/${author}`);
};
