function reverseWord(word) {
  // CHALLENGE 1: REVERSE A STRING
  // Return a string in reverse
  // ex. reverseString('hello') === 'olleh'

  var reversed = "";
  // console.log(word)
  const len = word.length;
  for (i = 0; i < len; i++) {
    //for the length of the word
    //start @ index last and reassign at index 0

    //get the last relevant element
    revChar = word[len - 1 - i];
    //assign it to the 1st relevant index
    reversed += revChar;
  }
  console.log(reversed);
}
//test call
// reverseWord("this")

function pally(word) {
  //get word length
  var len = word.length;
  //get word mid point
  var mid = len / 2;
  //get floor mid point
  var modNum = Math.floor(len / 2);
  //get mod for the iseven test
  var modMid = mid % modNum;
  // =)
  var isEven = true;
  // for end validation
  var isPally = true;

  if (!modMid == 0) {
    //if number is even
    isEven = false;
    //add 1 for middle index of odd numbers
    modNum += 1;
    console.log(modNum);
  }

  for (i = 0; i < modNum; i++) {
    //for the 1st half of the word
    //makes dynamic-end-number easier to use
    var endlen = len - 1 - i;
    if (word[i] === word[endlen]) {
      //if end points are equal
      console.log(i + " : " + word[i] + " | " + endlen + " : " + word[endlen]);
    } else {
      //end points don't match
      console.log("Not a pally");
      isPally = false;
    }
  }

  console.log("Palindrone status: " + isPally);
}
//test call
// pally('tacocat')

function reverseNum(number) {
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  var word = number.toString();
  var revNum = [];

  for (i = 0; i < word.length; i++) {
    var len = word.length - 1 - i;
    revNum[i] = word[len];
    // console.log("len: " + len );
    // console.log(word[len]);
    // console.log(" i: " + revNum[i]);
  }
  // console.log(+reversed)
  revNum = revNum.join("");
  console.log("Reversed: " + revNum);
}
//test call
// reverseNum(12345);

function capitalizeLetters(str) {
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

  //split sentence and assign indv words to array
  var string = str.split(" ");
  var newString = [];
  newString = string;

  for (i = 0; i < string.length; i++) {
    //for length of the array of strings
    //split up the letters
    var word = [];
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
//test call
// capitalizeLetters("i am groot")

function maxCharacter(str) {
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'

  var charArrs = [];
  var map = new Map();
  charArrs = str.split("");

  //get chars in a map obj
  for (i = 0; i < str.length; i++) {
    var n = map.has(str[i]);
    //if not in map, add wth value of 1
    if (n == false) {
      map.set(charArrs[i], 1);
      //if already in map, than add 1 to value
    } else {
      map.set(charArrs[i], map.get(charArrs[i]) + 1);
    }
  }
  // console.log(map);
  let largest = 0;
  let letter;
  //iterate through the key:val pairs and find the (first) most common letter
  for (const [key, value] of map) {
    console.log([key, value]);
    if (value > largest) {
      //set largest to largest value
      largest = value;
      //set key to largest value's key
      letter = key;
    }
  }
  console.log("(first) most common letter: " + letter);
}
//test call
// maxCharacter("aannggg");
// maxCharacter("javascript");

function fizzBuzz(start, end) {
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3,
  // instead of the number, print "Fizz", for multiples of 5 print "Buzz".
  // For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  for(let i = start; i < end + 1; i++){
    (i%15) == 0 ? console.log( i + ": Fizzbuzz") : (i%3) == 0 ? console.log(i + ": Fizz") : (i%5) == 0 ? console.log(i + ": Buzz") : console.log(i)
  }

}
//test call
// fizzBuzz(1,100);