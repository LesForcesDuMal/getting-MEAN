/* GET home page */
module.exports.pageone = function(req, res){
  res.render('html1', { title: 'pageone' });
};

module.exports.pagetwo = function(req, res){
  res.render('html2', { title: 'pagetwo' });
};
