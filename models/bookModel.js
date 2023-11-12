const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'],
  },
  author: { 
    type: String, 
    required: [true, 'author is required'],
  },
  summary: { 
    type: String, 
    required: [true, 'summary is required'],
  }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
