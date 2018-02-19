var Letter = require("./letter.js");


var Word = function(word) {
    this.word = word;
    this.lettersGuessed = [];

    this.getLetters = function() {
        for (var i = 0; i < this.word.length; i++) {
            var grabbedLetter = new Letter(this.word[i]);
            this.lettersGuessed.push(grabbedLetter);
        }
    };




};