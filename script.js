function rpsGame(yourChoice){
    console.log(yourChoice.id);

    var humanChoice;
    var botChoice;

    humanChoice = yourChoice.id;
    botChoice = botSelection(randomInt());
    console.log(botChoice);

    var score = Winner(humanChoice, botChoice);
    console.log(score);

    var message = Message(score);
    console.log(message);

    frontEnd(yourChoice.id, botChoice, message) 

}
function randomInt() {
    return Math.floor(Math.random()*3);

}
function botSelection(number){
    return ['rock', 'paper', 'scissors'][number]
}

function Winner(yourChoice, computerChoice){
    var Database={
        'rock': {'rock': 0.5, 'paper':1, 'scissors':0},
        'paper':{'rock': 0, 'paper':0.5, 'scissors':1},
       'scissors': {'rock':1, 'paper':0, 'scissors':0.5}
    };
    var yourScore = Database[yourChoice][computerChoice];
    var botScore = Database[computerChoice][yourChoice];

return [yourScore,botScore];
}

function Message([yourScore,botScore]){
    if(yourScore===0){
        return {'message': 'You won', 'color': 'green'};
    }
    if(yourScore===1){
        return {'message': 'You lost', 'color': 'red'};
    }
    else {
        return {'message': 'You tied', 'color': 'yellow'};

    }
}

function frontEnd(humanImgChoice, botImgChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();



    var a = document.createElement('div');
    var b = document.createElement('div');
    var c = document.createElement('div');

    
    a.innerHTML="<h4 style='font-size: 1.5vw;  width:15vw; text-align: center;'>Your choice:</h4";
    b.innerHTML="<h4 style=' font-size: 1.5vw; width:15vw; text-align: center;'></h4";
    c.innerHTML="<h4 style='font-size: 1.5vw; width:15vw; text-align: center;'>Computer's choice:</h4";

document.getElementById('rps-titles').appendChild(a);
document.getElementById('rps-titles').appendChild(b);
document.getElementById('rps-titles').appendChild(c);






    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    
    humanDiv.innerHTML="<img src='" + imagesDatabase[humanImgChoice] +"' height='150' width='150'>";
    botDiv.innerHTML="<img src='" + imagesDatabase[botImgChoice] +"' height='150' width='150'>";
    messageDiv.innerHTML="<h3 style='color:"+ finalMessage['color'] + "'>"+ finalMessage['message']+"</h2>";

document.getElementById('rps-game').appendChild(humanDiv);
document.getElementById('rps-game').appendChild(messageDiv);
document.getElementById('rps-game').appendChild(botDiv);



}
