/**
 * Created by luzhen on 14-10-31.
 */
var express=require('express');
var BlogAPIUtils=require('./BlogAPIUtils.js');
var app = express();
app.get('/getArticleList', function (req,res) {
  BlogAPIUtils.getArticleList(req,res);
});
app.get('/getArticleCategory', function (req,res) {
    BlogAPIUtils.getArticleCategory(req,res);
})
app.listen(process.env.PORT||5000, function () {
    console.log('app is listening');
});