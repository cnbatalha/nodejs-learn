var express = require('express');
var bodyParser = require('body-parser');

var disheRouter = express.Router();

disheRouter.use(bodyParser.json());

disheRouter.route('/')
.all(function(req, res, next){
	res.writeHead(200, {'Content-Type':'text/plain'});
	next();
})

.get( function(req, res, next){
	res.end('Will send all the dishes to you!');
})

.post( function(req, res, next){
	res.end('Will add the dish:' + req.body.name + ' with details:' + req.body.description);
});

disheRouter.route('/:dishId')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type':'text/plain'});
    next();
})

.get(function(req,res,next){
        res.end('Will send details of the dish -: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
    res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
});

exports.dishesRouter = disheRouter;