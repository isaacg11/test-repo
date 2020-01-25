const mongoose = require('mongoose');

const MoveSchema = new mongoose.Schema({
  start: {
    type: String,
    required: true
  },
  moves: {
      type: Array,
      required: true
  },
  dt_created: {
    type: Date,
    required: true,
    default: new Date()
  }
})

const Move = mongoose.model('Move', MoveSchema);
module.exports = Move;