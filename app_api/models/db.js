var mongoose = require('mongoose');

//var dbURI = "mongodb://localhost/Loc8r"
var dbURI = "mongodb://heroku_b12tnnk7:jofccjr63jgn4cvrmtfm590ve2@ds161475.mlab.com:61475/heroku_b12tnnk7";
mongoose.connect(dbURI);

var gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
})

process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

require('./locations');