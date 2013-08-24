
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

exports.railwayhouse = function(req, res) {
  res.render('railwayhouse');
}

exports.fiftyblue = function(req, res) {
  res.render('fiftyblue');
}

exports.cautions = function(req, res) {
  res.render('cautions');
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
