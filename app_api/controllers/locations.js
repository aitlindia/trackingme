var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}
 
module.exports.locationsList = function (req, res) {
  Loc
    .find()
    .exec(function(err, locations){
      if(err) {
        sendJsonResponse(res, 404, {"message" : "not found"});
      } else {
        sendJsonResponse(res, 200, locations);
      }
    });
};

module.exports.location = function(req, res) {
  if(req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .exec(function(err, location){
        if(!location) {
          sendJsonResponse(res, 404, {
            "message": "given locationid not found"
          });
          return;
        } else if(err) {
          sendJsonResponse(res, 404, err);
          return;
        }
        sendJsonResponse(res, 200, location);
      });
  } else {
    sendJsonResponse(res, 404, {"message": "locationid required"});
  }
};

module.exports.locationsCreate = function(req, res) {
  console.log(req.body.info);
  Loc.create({
    app_id: req.body.info.split("#")[0],
    message_id: req.body.info.split("#")[1],
    imei_no: req.body.info.split("#")[2],
    gps_fix: req.body.info.split("#")[3],
    gps_time: req.body.info.split("#")[4],
    gps_date: req.body.info.split("#")[5],
    latitude: parseFloat(req.body.info.split("#")[6]),
    ns_indicator: req.body.info.split("#")[7],
    longitude: parseFloat(req.body.info.split("#")[8]),
    ew_indicator: req.body.info.split("#")[9],
    sog: parseFloat(req.body.info.split("#")[10]),
    cog: parseFloat(req.body.info.split("#")[11]),
    no_of_satelite: parseInt(req.body.info.split("#")[12]),
    hdop: parseFloat(req.body.info.split("#")[13]),
    sig_strg_sig_qlty: parseFloat(req.body.info.split("#")[14]),
    power_mode: parseFloat(req.body.info.split("#")[15]),
    bat_l_v1: parseFloat(req.body.info.split("#")[16]),
    ai_val_2: parseFloat(req.body.info.split("#")[17]),
    ai_val_2: parseFloat(req.body.info.split("#")[18]),
    distance: parseFloat(req.body.info.split("#")[19]),
    odometer: parseFloat(req.body.info.split("#")[20]),
    digital_inputs: parseFloat(req.body.info.split("#")[21])
  }, function(err, location){
    if(err) {
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 201, location);
    }
  });
}