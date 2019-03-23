var express = require('express');
var app = express();
app.use(express.static('public'));

// 404 catch-all处理器（中间件）
app.use(function(req, res, next){
    res.status(404);
    res.sendFile(__dirname + '/public/404/index.html');
});
// 500错误处理器（中间件）
// app.use(function(err, req, res, next){
//     // console.error(err.stack);
//     res.status(500);
//     res.render('500',{
//       title : "500错误",
//       keywords : "500",
//       description : "leadream's portfolio",
//       assets:"500"
//     });
// });

app.listen(4000, function () {
  console.log('app listening on port 4000!');
});
