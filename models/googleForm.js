const mongoose = require('mongoose');

const googleForm = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
  },
  education: { 
    type: String, 
    required: [true, 'Education is required'],
  },
  skills: { 
    type: String, 
  },
  linkedn_profile: { 
    type: String, 
  },
  current_ctc: { 
    type: String, 
  },
  expected_ctc: { 
    type: String, 
  },
  references: { 
    type: String, 
  },
  resume: { 
    type: String, 
  },
  message: { 
    type: String
  }
});

const FormTable = mongoose.model('FormTable', googleForm);
module.exports = FormTable;
