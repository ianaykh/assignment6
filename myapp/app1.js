var express = require("express");
var http = require("http");
var app = express();

var jsonObj = {
    outcome: 'Play',
    wins: '0',
    losses: '0',
    ties: '0'
};

var choice = ["rock", "paper", "scissors", "lizard", "spock"];
var win = 0,lose = 0,tie = 0;



function HTMLload(req, res) {
    app.use('/user', express.static(__dirname + '/user'));
    res.sendFile('/client.html', {
        root: __dirname
    });
    return res;
}
http.createServer(app).listen(3000);

app.get('/', function(req, res) {
    res = HTMLload(req, res);
});

app.post('/outcome', function(req, res) {
    jsonObj.outcome = 'Play';
    res.json(jsonObj);
});

app.post('/play/:element', function(req, res) {
    var element = req.params.element;
    checkOutcome(element);
    res.json(jsonObj);
});




function checkOutcome(userChoice) {
    var serverChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log("User Choice: " + userChoice + " Server Choice: " + serverChoice);
    if (userChoice === serverChoice) {
        jsonObj.outcome = 'Tie';
        tie = tie + 1;
        jsonObj.ties = tie;
        console.log(jsonObj);
    } else if (userChoice === 'rock') {
        if (serverChoice === 'scissors' || serverChoice === 'lizard') {
            jsonObj.outcome = 'Win';
            win = win + 1;
            jsonObj.wins = win;
            console.log(jsonObj);
        } else {
            jsonObj.outcome = 'Lose';
            lose = lose + 1;
            jsonObj.losses = lose;
            console.log(jsonObj);
        }
    } else if (userChoice === 'paper') {
        if (serverChoice === 'rock' || serverChoice === 'spock') {
            jsonObj.outcome = 'Win';
            win = win + 1;
            jsonObj.wins = win;
            console.log(jsonObj);
        } else {
            jsonObj.outcome = 'Lose';
            lose = lose + 1;
            jsonObj.losses = lose;
            console.log(jsonObj);
        }
    } else if (userChoice === 'scissors') {
        if (serverChoice === 'paper' || serverChoice === 'lizard') {
            jsonObj.outcome = 'Win';
            win = win + 1;
            jsonObj.wins = win;
            console.log(jsonObj);
        } else {
            jsonObj.outcome = 'Lose';
            lose = lose + 1;
            jsonObj.losses = lose;
            console.log(jsonObj);
        }
    } else if (userChoice === 'lizard') {
        if (serverChoice === 'paper' || serverChoice === 'spock') {
            jsonObj.outcome = 'Win';
            win = win + 1;
            jsonObj.wins = win;
            console.log(jsonObj);
        } else {
            jsonObj.outcome = 'Lose';
            lose = lose + 1;
            jsonObj.losses = lose;
            console.log(jsonObj);
        }
    } else if (userChoice === 'spock') {
        if (serverChoice === 'rock' || serverChoice === 'scissors') {
            jsonObj.outcome = 'Win';
            win = win + 1;
            jsonObj.wins = win;
            console.log(jsonObj);
        } else {
            jsonObj.outcome = 'Lose';
            lose = lose + 1;
            jsonObj.losses = lose;
            console.log(jsonObj);
        }
    }
}
console.log("server listening on port 3000");
