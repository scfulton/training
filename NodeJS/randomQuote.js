// module.exports = {
//     randomQuoteEmitter
// }


// module.exports.randomQuoteEmitter = randomQuoteEmitter;

function randomQuoteEmitter(){
    let quotes = [
        'Haben sie gehort, das Deutsche Band?',
        'A tolls a toll, and a rolls a roll, and if we don\'t get no tolls then we don\'t eat no rolls.',
        'Yes we have Nosferatu, we have Nosferatu today!',
        'So long and thanks for all the fish, so sad it had to come to this.',
        'This is my BOOM STICK!',
        'I see Blue, he looks glorious.',
        'I\'m sworn to carry your burden.',
        'From days of long ago, from uncharted regions of the universe, comes a legend...',
        'Ah, buckle this. Ludicrous speed! GO!',
        'Be excellent to each other!'
    ];

    let randomNumber = getRandomNum();
    console.log(quotes[randomNumber]);
    document.getElementById("textBox").textContent = quotes[randomNumber];

    
    
}

function getRandomNum() {
    let randomNumber = Math.floor(10*(Math.random()));
    console.log(randomNumber);
    return randomNumber;
}

randomQuoteEmitter();