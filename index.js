/**
 * Created by luzhen on 14-10-30.
 */
var superagent = require('superagent');
var cheerio = require('cheerio');
function getArticleList(blogUser,num){
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
            console.log(items);
        })
}
exports.getArticleList=getArticleList;
