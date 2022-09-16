
function exercise1() {
  var textboxvalue = document.getElementById('txt').value;
  const words = textboxvalue.split(' ');
  console.log(words.length);

  words.forEach(word => {
    console.log(`${word} (${word.length})`);
  });

}

function exercise2() {
  var textboxvalue = document.getElementById('txt').value;
  words = textboxvalue.split(' ');
  
  const sorted = words.sort((a, b) => a.length - b.length);
  
  sorted.forEach(sort => {
  console.log(`${sort}`);
  });

  const reversewords = words.reverse(); 

  reversewords.forEach(reverse => {
  console.log(`${reverse}`);
  });
  
}

function exercise3() {
  var textboxvalue = document.getElementById('txt').value;
  const words = textboxvalue.split(' ');

  obj = {};

  words.forEach((word) => {
    if (obj[word] == undefined) {
        obj[word] = 1;
    } else {
        obj[word] ++;

    }
  });

  for (const freq in obj) {
    console.log(`${freq} ${obj[freq]}`)
  }

  const sortArray = Array.from(Object.keys(obj));
  sortArray.sort((a, b) => obj[a] - obj[b]);

  sortArrayReverse = sortArray.reverse();
  sortArrayReverse.forEach(freq => console.log(`${freq}`));

}

function exercise4() {
  var textboxvalue = document.getElementById('txt').value;
  const spaces = textboxvalue.replace(/\s/g, '');
  const letters = spaces.split('');

  obj = {};

  letters.forEach((letter) => {
    if (obj[letter] == undefined) {
        obj[letter] = 1;
    } else {
        obj[letter] ++;

    }
  });

  for (const letterfreq in obj) {
    console.log(`${letterfreq}: (${obj[letterfreq]})`);
  }

}

  function exercise5() {
  var textboxvalue = document.getElementById('txt');
  var alphabet = new Map([['a', '4'], ['e', '3'], ['i', '1'], ['g', '9'], ['t', '7']]);

  text = textboxvalue.value.toLowerCase();
  for (var i=0; i < text.length; i++) {
    if (alphabet.get(text[i])) {
      text = text.replace(text[i], alphabet.get(text[i]));
    }
  }

  console.log(text);
}