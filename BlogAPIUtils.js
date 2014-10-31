/**
 * Created by luzhen on 14-10-30.
 */
var superagent = require('superagent');
var cheerio = require('cheerio');
function getArticleList(req,res){
    var blogUser=String(req.query.blogUser);
    var num=String(req.query.num);
    superagent.get('http://blog.csdn.net/'+blogUser+'/article/list/'+num)
        .end(function (err, sres) {
            $ = cheerio.load(sres.text);
            var items = [];
            $('.link_title a').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    'title': $element.text().trim(),
                    'href': 'http://blog.csdn.net' + $element.attr('href')
                });
            });
            res.send(items);
        })
}

function getArticleCategory(req,res){
    var blogUser=String(req.query.blogUser);
    superagent.get('http://blog.csdn.net/'+blogUser)
        .end(function (err, sres) {
            $ = cheerio.load(sres.text);
            var items = [];
            $('#panel_Category .panel_body li a').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    'title': $element.text().trim(),
                    'href':  $element.attr('href')
                });

            });
            res.send(items);
        })
}

exports.getArticleList=getArticleList;
exports.getArticleCategory=getArticleCategory;
