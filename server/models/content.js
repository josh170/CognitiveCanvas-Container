var mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
  contentId: Number,
  title: String,
  url: String,
  type: String
});

var contentModel = mongoose.model('Content', contentSchema);

module.exports = contentModel;