// task 1
const readlineSync = require('readline-sync');
let names = [];
function record() {
  let name = '';
  while (true) {
    name = readlineSync.question('Enter a name:');
    if (name === '') break;
    names.push(name);
  }
  console.log('Names recorded' : names);
}

record();
// task2
names.sort();
console.log('Sorted names: ', names);
// task 3
function findDuplicate(names) {
  let hashtable = new Map();
  let duplicates = [];

  for (let name of names){
    if (hashtable.has(name)){
      hashtable.set(name, hashtable.get(name) + 1);
    }
    else {
      hashtable.set(name, 1);
    }
  }
  hashtable.forEach(value, key) => {
    if (value > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
}
