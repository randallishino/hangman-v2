
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
};