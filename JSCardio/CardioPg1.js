
function reverseWord(word){

    // CHALLENGE 1: REVERSE A STRING
    // Return a string in reverse
    // ex. reverseString('hello') === 'olleh'

    var reversed="";
    // console.log(word)
    const len = word.length;
    for (i = 0; i < len; i++ ){ 
        //for the length of the word
        //start @ index last and reassign at index 0

        //get the last relevant element
        revChar = word[(len -1)  - i];
        //assign it to the 1st relevant index
        reversed += revChar
    }
    console.log(reversed)
}

// reverseWord("this")

function valPalindrone(word){ //don't use this one
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

    const len = word.length;

    //even mid
    // var mid = Math.floor(len/2)
    // console.log(mid)

    //func modBy2
    function modBy2(word) {
        const isIt = false;
        if ( (word.length % 2)  == 0 ){
            isIt = True
            
        }
        return isIt;
    }

    //func getMid
    function getMidIndex(word, bool) {
        const value = null;
        if (bool){
            value = word/2;
        }else{
            value = word%2;
        }
        
    }
    

    //func palindrone


    /**
     * get length
     * find out if odd or even, (to add 1 or not to mid)
     * reead for midlength, then verify remaining length
     */

}

function pally (word){
    //get word length
    var len = word.length;
    //get word mid point
    var mid = len / 2;
    //get floor mid point
    var modNum = Math.floor(len/2);
    //get mod for the iseven test
    var modMid = mid % modNum;
    // =)
    var isEven = true;
    // for end validation
    var isPally = true;


    if ( !modMid == 0 ) //if number is even
    {
        isEven = false;
        //add 1 for middle index of odd numbers
        modNum += 1;
        console.log(modNum)
    }

    for (i = 0; i < modNum; i++ ){  //for the 1st half of the word
        //makes dynamic-end-number easier to use
        var endlen = len-1 - i;
        if ( word[i] === word[endlen]){ //if end points are equal
            console.log(i + " : " + word[i] + " | " + endlen + " : " + word[endlen])
        }else{ //end points don't match
            console.log("Not a pally");
            isPally = false;

        }
    }

    console.log('Palindrone status: ' + isPally)
}

// pally('tacocat')

function reverseNum(number){
    // CHALLENGE 3: REVERSE AN INTEGER
    // Return an integer in reverse
    // ex. reverseInt(521) === 125
    var word = number.toString();
    var revNum = [];
    
    for (i = 0; i < word.length; i++){
        var len = word.length-1-i;
        revNum[i] = word[len];
        // console.log("len: " + len );
        // console.log(word[len]);
        // console.log(" i: " + revNum[i]);
    }
    // console.log(+reversed)
    revNum = revNum.join("");
    console.log("Reversed: " +revNum);
}

// reverseNum(12345);

function capitalizeLetters(str) {
    // CHALLENGE 4: CAPITALIZE LETTERS
    // Return a string with the first letter of every word capitalized
    // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'   

    //split sentence and assign indv words to array
    var string = str.split(" ")
    var newString = [];
    newString = string;
    
    for (i = 0; i < string.length; i++){ //for length of the array of strings
        //split up the letters
        var word = []
        word = string[i].split("");
        // console.log("word: " + word[0]);
        //remove first letter to capitalize
        var firstLetter = word.shift();
        firstLetter = firstLetter.toUpperCase();
        //add the cap letter back on
        word.unshift(firstLetter);
        //join the letters back into a string
        word = word.join("");
        // console.log(word);
        //add word back to array
        string[i] = word;
    }
    //joins array to form a sentenced with caps
    console.log("Capped string: " + string.join(" "));
    // console.log(string[1])
}

// capitalizeLetters("i am groot")



function maxCharacter(str) {
    // CHALLENGE 5: MAX CHARACTER
    // Return the character that is most common in a string
    // ex. maxCharacter('javascript') == 'a'

    var charArrs = [];
    var map = new Map();
    charArrs = str.split("");

    //get chars in a map obj
    for (i = 0; i<str.length; i++){
        var n = map.has(str[i]);
        if (n == false){
            map.set(charArrs[i], 1);
        }else{
            map.set(charArrs[i], (map.get(charArrs[i]))+1);
        }
    }



// var array1 = [5, 12, 8, 130, 44];

// function isLargeNumber(element) {
//   return element > 13;
// }

// console.log(array1.findIndex(isLargeNumber));
// // expected output: 3
    
    console.log(map);
}

maxCharacter("bass");



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}