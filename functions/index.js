const admin = require('firebase-admin');
admin.initializeApp();


// Import function from file
const {addMessage} = require('./api/addMessage.js');

// Export function for deployment
exports.addMessage = addMessage