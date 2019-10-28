function longestWord(sen) {
  // CHALLENGE 1: LONGEST WORD
  // Return the longest word of a string
  // ex. longestWord('Hi there, my name is Brad') === 'there,'
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  let maxCount = 0;
  let maxIndices = [];
  let maxWords = [];
  sentenceArray = sen.split(" ");
  // console.log(sentenceArray);
  let i = 0;

  //populate array with letter count per word index
  for (const iterator of sentenceArray) {
    // console.log(iterator);
    maxIndices[i] = iterator.length;
    i++;
  }
  // console.log(maxIndices);

  //determine max letter count
  for (const index of maxIndices) {
    if (index > maxCount) {
      maxCount = index;
    }
  }
  // console.log(maxCount);

  //put maxCount length words in array
  for (const words of sentenceArray) {
    if (words.length == maxCount) {
      maxWords.push(words);
    }
  }
  // console.log(maxWords);

  //determine what to return to console
  if (maxWords.length > 1) {
    console.log("multiple words: " + maxWords);
  } else if (maxWords.length == 1) {
    let word = maxWords[0];
    console.log("the longest word: " + word);
  } else {
    console.log("empty string");
  }
}
// test calls
// longestWord("what will been this bee");
// longestWord("Hi there");

function chunkArray(arr, len) {
  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

  let i = 0;
  let newArray = [];
  //how many chunks....
  // answer = if (array length has no remainder / by len given ) 
  // {then divide arr.length by len to get the # of chunks}
  // else {there is a remainder and must add one to the number of floored chunks}
  var answer = (arr.length % len == 0 ? arr.length / len : Math.floor(arr.length / len) + 1);
  for (let i = 0; i < arr.length; i + answer - 1) {
    newArray.push(arr.splice(i, len))
  }
  console.log(newArray)
}
//test calls
// chunkArray([1, 2, 3, 4, 5, 6, 7], 4);

function flattenArray(arrays) {
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

  let flatArray = [];
  //iterate through arrays given to flat
  for (const subArr of arrays) {
    //iterate through each index of sub arrays
    for (const index of subArr) {
      //push each element onto new flat array
      flatArray.push(index);
    }
  }
  console.log(flatArray);
}
//test calls
// flattenArray([[1, 2], [3, 4], [5, 6], [7]])
// flattenArray([[1,2,3], [4], [5,6,7,8,9], [10]])

function isAnagram(str1, str2) {
  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'

  let str1Map = new Map();
  let str2Map = new Map();
  let isAnagram = false;
  let validKey, validValue;
  mapArray(str1.toUpperCase(), str1Map);
  mapArray(str2.toUpperCase(), str2Map);

  for (const [letter, number] of str1Map) {
    validKey = str2Map.has(letter, number);
    validValue = str2Map.get(letter);
    // console.log(validValue == number);
    if (validValue == number) {
      isAnagram = true;
    } else {
      isAnagram = false;
      break;
    }
  }
  //helper function to map each array (key:value) pairs  
  function mapArray(array, myMap) {
    for (const letter of array) {
      if (myMap.has(letter)) {
        myMap.set(letter, (myMap.get(letter) + 1));
      } else {
        myMap.set(letter, 1)
      }
    }
    return myMap;
  }
  console.log(isAnagram ? "Anagram: True" : "Anagram: False");
}
//test calls
// isAnagram("dormitory", "dirtyroom");

function letterChanges(str) {
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'

  // Ranges:
  // 65-90 == A-Z
  // 97-122 == a-z

  let newString = [];
  //Go-go let-ter-Chan-ger!
  changeToAscii(str);

  //driver function
  function changeToAscii(str) {
    //for all letters in string
    for (const letter of str) {
      //convert letter to ascii code
      let letterCode = letter.charCodeAt();
      //verify that code is in range: see "Ranges" section above
      letterCode = validateRange(letterCode);
      //check if letter is vowel, to be capitalized
      letterCode = isVowel(letterCode);
      //push converted letter ascii code to newString
      newString.push(letterCode);
    }
    //converts ascii string to character string
    newString = backToString(newString);
    console.log(newString.join(""))
  }

  //verify that code is in range: see "Ranges" section above
  function validateRange(char) {
    if (char > 96 && char < 123) { //lowercase range
      //add 1 to code  -> next letter
      char++;
    } else if (char > 64 && char < 91) {  //uppercase range
      char++;
    }
    //check if was z or Z, then wraps to a or A
    if (char == 91) {
      char = 65;
    } else if (char == 123) {
      char = 97;
    }
    return char;
  }

  //check if letter is vowel, to be capitalized
  function isVowel(char) {
    let lowerVowels = [97, 101, 105, 111, 117];
    let upperVowels = [65, 69, 73, 79, 85];
    let code;

    //for of loop made this difficult, so I old schooled it
    for (let i = 0; i < lowerVowels.length; i++) {
      //if character is a vowel
      if (char === lowerVowels[i]) {
        //replace with its capital counterpart
        code = upperVowels[i];
        return code;
      }
    }
    //if not a vowel, still return un-altered letter
    return char
  }

  //converts ascii string to character string
  function backToString(newString) {
    let newWord = [];
    //for each letter of newString, convert from ascii to letter
    for (const char of newString) {
      let letter = String.fromCharCode(char);
      //push to new string
      newWord.push(letter);
    }
    return newWord;
  }
}
//test calls
// letterChanges("zdhabcd");
// letterChanges("abcdefghijklm nopqrstuvwxyz");
// letterChanges("i am groot");

