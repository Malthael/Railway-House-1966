
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index');
};

exports.about = function(req, res) {
  res.render('about');
}

exports.rooms = function(req, res) {
  res.render('rooms');
}

exports.locations = function(req, res) {
  res.render('locations');
}

exports.scenes = function(req, res) {
  res.render('scenes');
}

exports.booking = function(req, res) {
  res.render('booking');
}

exports.feedback = function(req, res) {
  res.render('feedback');
}
