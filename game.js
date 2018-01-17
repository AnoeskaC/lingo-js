var random = Math.floor( Math.random() * 479);

console.log(random);

var answer = words[random];

var answerArray = answer.split('');

console.log(answer);

var table = document.getElementById('table');

var checkBtn = document.getElementById('check');

checkBtn.setAttribute("onclick", "check()");

var firstLetter = document.getElementById('letter_0');

firstLetter.value = answerArray[0];
var attempt = 1

function check() {

  var answer = Array.from(answerArray);
  var tr = document.createElement("tr");
    for(i = 0;i <=4;i++){
      var td = document.createElement("td");
      var input = document.getElementById("letter_" + i);
      var tekst = document.createTextNode(input.value);
      td.style.backgroundColor = "#0685ff";
      td.appendChild(tekst);
      tr.appendChild(td);
      if(input.value === answer[i]){
        td.style.backgroundColor = "red";
        answer[i] = "*";
    }
    for(j = 0;j<=4;j++){
      if(input.value === answer[j]){
        if(td.style.backgroundColor !="red")
        td.style.backgroundColor = "yellow";
      }
    }

  }
   table.appendChild(tr);

   if(attempt === 6){
     document.getElementById('gameover').style.display = "block"
   }
   else{attempt++}
 }

//automatisch naar volgende input
$('.rij1').keydown(function (event){
  var inputValue = event.charCode
  if (event.which == 8 || inputValue == 46){
      $(this).val('')
      $(this).prev('.rij1').focus();
      event.preventDefault()
    }
  else if(this.value.length == this.maxLength){
    $(this).next('.rij1').focus();
  }
})
