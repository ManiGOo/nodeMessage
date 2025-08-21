// sample in-memory messages
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
  { text: "How are you?", user: "Amando", added: new Date() },
  { text: "How are you?", user: "John", added: new Date() },
];

// return all messages
function getAllMessages() {
  return messages;
}

// return messages for a single user
function getMessageByUser(user) {
  return messages.filter(m => m.user === user);
}

// return distinct list of users
function getUsers() {
  return [...new Set(messages.map(m => m.user))];
}

// add a new message
function addMessage(user, text) {
  messages.push({ text, user, added: new Date() });
}

// export everything as named functions
module.exports = {
  getAllMessages,
  getMessageByUser,
  getUsers,
  addMessage
};
