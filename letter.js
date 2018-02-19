
var Letter = function(letter) {
    this.letter = letter;
    this.letterGuessed =  false;

    this.showLetter = function() {
        if(this.letter = '') {
            this.letterGuessed = true;
        }
        else {
            this.letterGuessed = false;
        }
    }

    this.printInfo = function() {
        if(this.letterGuessed) {
            return this.letter;
        }
        else {
            return '_ ';
        }
    }
};


var test = new Letter('a');
test.showLetter();
test.printInfo();