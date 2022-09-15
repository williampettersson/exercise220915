console.log("Hello from js!");

function exercise() {
  console.log('first exersice');
  var textbox1value = document.getElementById('txt1').value;
  var textbox2value = document.getElementById('txt2').value;

  console.log(`${textbox2value}, ${textbox1value}, (${textbox1value.length})`);
}
