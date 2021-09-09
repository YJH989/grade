module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html');
    });

    app.get('/about',function(req,res){
        res.render('about.html');
    });
	
	app.get('/intro',function(req,res){
        res.render('intro.html');
    });

}