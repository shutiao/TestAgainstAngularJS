var express = require('express');
var httpFunctionality = express.Router();
var auth = require('basic-auth');

httpFunctionality.route('/functionality')
    .get(function(req, res){
        var caseNum = req.query.case;
        if (!caseNum){
            res.render(__dirname + '/../../views/HTTP/functionality.html');
        }
        else{
            var options = {
                root: __dirname + '/../../views/HTTP',
                headers: {}
            };
            for (var header in req.query){
                if (header != 'case' &&	header != 'StatusCode'){
                    res.set(header, req.query[header]);
                    options.headers[header] = req.query[header];
                }
            }
            switch(caseNum){
                case "HTTP-3-1":
                    res.render(__dirname + '/../../views/HTTP/functionality.html');
                    break;
                case "HTTP-3-2":
                    res.sendFile('cache-static.html', options);
                    break;
                case "HTTP-3-3":
                    res.redirect(301, '/HTTP/functionality');
                    break;
                case "HTTP-3-4":
                    res.redirect(302, '/HTTP/functionality');
                    break;
            }
        }
    })

    .post(function(req, res){
        var caseNum = req.query.case || req.body.case;
        switch(caseNum){
            case 'csp-reports':
                res.send(res.locals);
                break;
            case 'HTTP-3-4':
                res.redirect(302, '/HTTP/functionality');
                break;
        }
    });

module.exports = httpFunctionality;