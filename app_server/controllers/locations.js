module.exports.homeList = function(req, res) { 
  res.render('location', {title: 'Home'});
};

module.exports.locationInfo = function(req, res) { 
  res.render('index', {title: 'Location info'});
};

module.exports.addReview = function(req, res) { 
  res.render('index', {title: 'Add review'});
};

