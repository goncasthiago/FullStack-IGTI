var express = require('express');
var fs = require('fs');
var app = express();
var filePath = './games/games.json';

var lotteryNumbers = [];

function getLotteryNumber(){
    return Math.max(Math.ceil(Math.random() * 60), 1);

}

function getLotteryNumbers(){
    lotteryNumbers = [];

    while (lotteryNumbers.length < 6){
        var newNumber = getLotteryNumber();
        if(lotteryNumbers.indexOf(newNumber) === -1){
            lotteryNumbers.push(newNumber);
        }
    }
}


app.get('/', function(req,res){
    res.json({message: 'Ola do servidor'})
});

app.get('/lottery', function (req, res) {

    getLotteryNumbers();

    var games = null;

    if (fs.existsSync(filePath)){
        games = JSON.parse(fs.readFileSync(filePath).toString());
    } else {
        games = { lotteryGames: []};

    }

    games.lotteryGames.push(lotteryNumbers);

    fs.writeFileSync(filePath, JSON.stringify(games, null, 2));

    res.json({lotteryNumbers});
});

app.listen('8081');
console.log("Servidor iniciado");

