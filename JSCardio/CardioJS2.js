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

  
  let newArray = arr.splice(i, len);
  console.log(newArray)

}
//test calls
chunkArray([1, 2, 3, 4, 5, 6, 7], 3) 

function flattenArray(arrays) {
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

  let flatArray = [];
  for (const subArr of arr) {
    for (const index of subArr) {
      flatArray.push(index);
    }
  }
  console.log(flatArray);
}
//test calls
// chunkArray([[1, 2], [3, 4], [5, 6], [7]])
// chunkArray([[1,2,3], [4], [5,6,7,8,9], [10]])

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// // Call Function
// const output = longestWord('Hello, my name is Brad');

// console.log(output);
