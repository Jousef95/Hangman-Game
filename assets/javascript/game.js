
var wordBank = ["ARCHER", "CASTLE", "JOUSTING", "KNIGHTS", "KINGDOM"];
var word = [];
var blanks = [ ];
var key = 0
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var word = randomWord.split("");
var guessed = [];


for(i=0; i< word.length; i++){
    blanks.push("_");
};

document.getElementById("currentWord").innerHTML = blanks.join(" ");

document.onkeydown = function (e) {
    key = String.fromCharCode(e.keyCode);
    guessed.push(toString(key));
    document.getElementById("guesses").innerHTML = guessed;

    if(word.includes(key)) {
        for( j=0; j<word.length; j++){
            if (word[j] == key)
                blanks[j] = key;
                document.getElementById("currentWord").innerHTML = blanks.join(" ");

    };
}}

