const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter location> '
});

rl.prompt();

rl.on('line', (line) => {
//   switch (line.trim()) {
    // case 'hello':
    //   console.log('world!');
    //   break;
    // default:
    if (line >8 || line <0){
      console.log(`Please enter a valid location`);}

    //   break;
//   }
//   rl.prompt();
})
// .on('true', () => {
//   console.log('Have a great day!');
//   process.exit(0);
// });
// function getinput(){
// const readline = require('readline');

// readline.emitKeypressEvents(process.stdin);
// process.stdin.setRawMode(true);

// process.stdin.on('keypress', (key, data) => {
//   if (data.ctrl && data.name === 't') {
//     process.exit();
//   } else {
//     console.log('key', key);
//     // console.log('data', data);
//   }
// // readline.pause();
// });
// console.log('Press a key');
// }
// readline.close();

// getinput();