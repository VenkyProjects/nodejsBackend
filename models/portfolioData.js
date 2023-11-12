const mongoose = require('mongoose');

const portfolioData = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Title is required'],
  },
  email: { 
    type: String, 
    required: [true, 'author is required'],
  },
  subject: { 
    type: String, 
    required: [true, 'author is required'],
  },
  message: { 
    type: String, 
    required: [true, 'author is required'],
  },
  phone_number: { 
    type: String, 
    required: [true, 'summary is required'],
  }
});

const Book = mongoose.model('portfolioData', portfolioData);
module.exports = Book;
