/*************************************************
 *       Hangman Game
 * ------------------------------------
 * @author MELISSA KOUADIO <angemelisk@gmail.com>
 * @link <https://github.com/DiamondArt>
 * 
 * ***********************************************/
const word = prompt("Player 1, typing a word (8 letters min) :");

if (word.length < 8) {

    console.log("The word must be contain 8 letters !");

} else {

    let hiddenWord = '';
    for (let i = 0; i < word.length; i++) {
        hiddenWord += '*';
    }
    console.log(hiddenWord); 

    let chances = 10;
    let guesses = [];

    while (chances > 0 && hiddenWord.indexOf('*') !== -1) {

        let letter = prompt("Player 2, give a word:");

        if (guesses.indexOf(letter) !== -1) {

            console.log("trying again, !");

        } else {

            guesses.push(letter);
            console.log("guesse :", guesses);

            if (word.indexOf(letter) !== -1) {

                console.log("correct guesse !");

                let temp = '';

                for (let i = 0; i < word.length; i++) {

                    if (word[i] === letter) {

                        temp += letter;

                    } else {

                        temp += hiddenWord[i];

                    }
                }
                hiddenWord = temp;

                console.log(hiddenWord); 
            } else {

                console.log("bad guesse !");

                chances--; 

                console.log("number of Chance :", chances);
            }
        }
    }

    if (hiddenWord.indexOf('*') === -1) {

        console.log("CONGRATS YOU WIN !");

    } else {
        console.log("YOU LOSE !");
    }
}