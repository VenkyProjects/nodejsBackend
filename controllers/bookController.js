const Book = require('../models/bookModel');
const FormTable=require('../models/googleForm');
const A=require('../middlewares/resolveandcatch')

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  addBook: A(async (req, res) => {
    const { title, author, summary } = req.body;
    try {
      const newBook = new Book({ title, author, summary });
      const savedBook = await newBook.save();
      res.status(201).json({ message: 'Book created successfully', book: savedBook });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }),
  updateBook: A(async (req, res) => {
    console.log(req,'req1234');
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }),
  deleteBook: async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json({ message: 'Book deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  submitForm: A(async (req, res) => {
    console.log(req,'req1234');
    const { name, email,education, skills,linkedn_profile,current_ctc,expected_ctc,references,resume,message } = req.body;
    try {
      const newBook = new FormTable({ name, email, education,skills,linkedn_profile,current_ctc,expected_ctc,references,resume,message });
      const savedBook = await newBook.save();
      res.status(201).json({ message: 'Book created successfully', book: savedBook });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }),
};

module.exports = bookController;
