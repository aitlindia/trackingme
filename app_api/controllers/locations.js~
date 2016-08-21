var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}
 
module.exports.locationsList = function (req, res) {
  sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsCreate = function(req, res) {
  Loc.create(dataToSave, callback);
}