
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
 