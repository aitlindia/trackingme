var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
  app_id: {type: String, required: true},
  message_id: {type: String, required: true},
  imei_no: {type: String},
  gps_fix: {type: String},
  gps_time: {type: String},
  gps_date: {type: String},
  latitude:Number,
  ns_indicator:String,
  longitude:Number,
  ew_indicator:String,
  sog:Number,
  cog:Number,
  no_of_satelite:Number,
  hdop:Number,
  sig_strg_sig_qlty:Number,
  power_mode:Number,
  bat_l_v1:Number,
  ai_val_2:Number,
  ai_val_2:Number,
  distance:Number,
  odometer:Number,
  digital_inputs:Number
});

mongoose.model('Location', locationSchema);