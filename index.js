let express = require('express');
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); //html제외 나머지는 public폴더에 있다.

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
