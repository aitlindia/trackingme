module.exports.index = function(req, res){
  res.render('users/index', { title: 'Users' });
};

module.exports.new = function(req, res){
  res.render('users/new', { title: 'New User' })
}

