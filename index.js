//*USING HTTP DISPLAING HTML PAGE8 */

/*var http = require('http'),
fs = require('fs');
http.createServer(function(req, res) {
 res.writeHead(200, {
  'Content-Type': 'text/html',
'Access-Control-Allow-Origin' : '*'
});
var readStream = fs.createReadStream(__dirname + '/index.html');
readStream.pipe(res);  

}).listen(1337);

// tell ourselves what's happening
console.log('Visit me at http://localhost:1337');
*/



//*USING EXPRESS DISPLAYING HTML */


var express = require('express');

 
var app     = express();
  var path = require('path');
    
  // send our index.html file to the user for the home page
  /*app.get('/', function(req, res) {
  	res.sendFile(path.join(__dirname + '/index.html'));
  //res.send("hllo");
  //console.log("hello");
  });*/



app.listen(1337);
console.log("port is running");



//USING EXPRESS ROUTING MODEL */


var adminRouter = express.Router();
// admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
res.send('I am the dashboard!');
 });


 adminRouter.use(function(req, res, next) {
    
    	// log each request to the console
	console.log(req.method, req.url);
    
    // continue doing what we were doing and go to the route
    	next(); 
    });
    //*****Router with Parameter******************** */
    adminRouter.get('/users/:name', function(req, res) {
         	res.send('hello ' + req.params.name + '!');
         });
        
        //* */


        // route middleware to validate :name
 adminRouter.param('name', function(req, res, next, name) {
	// do validation on name here
    	// blah blah validation
    	// log something so we know its working
    console.log('doing name validations on ' + name);
    
    // once validation is done save the new item in the req
    	req.name = name;
   // go to the next thing
   	next(); 
   });
   
    
          

// users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
	res.send('I show all the users!');
});

// posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
res.send('I show all the posts!');
 });

// apply the routes to our application
app.use('/admin', adminRouter);




//*LOGIN ROUTE APP.ROUTE() */



app.route('/login')

    // show the form (GET http://localhost:1337/login)
    .get(function(req, res) {
 		res.send('this is the login form');
    })
    
    .post(function(req, res) {
        	console.log('processing');
        	res.send('processing the login form!');
        });