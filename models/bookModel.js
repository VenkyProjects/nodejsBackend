const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  // _id: {
  //   type: String,
  //   default: uuidv4,
  // },
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
