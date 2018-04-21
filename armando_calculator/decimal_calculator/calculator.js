var roundscore, active_player, score, roundscore, sum, rect, dev, mult, num_str, dec, memory_val;

init();

document.getElementById("btn-0").addEventListener('click', function(){
    if(dec == true){
      num_str += document.getElementById("btn-0").value;
      score[active_player] = parseFloat(num_str);
      console.log(score[active_player]);

    }
    else{
      num_str += document.getElementById("btn-0").value //adds number of the string
      score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
      console.log(parseFloat(num_str))
    }
    document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-1").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-1").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-1").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-2").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-2").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-2").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-3").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-3").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-3").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-4").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-4").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-4").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-5").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-5").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-5").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-6").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-6").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-6").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-7").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-7").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-7").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-8").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-8").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-8").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-9").addEventListener('click', function(){
  if(dec == true){
    num_str += document.getElementById("btn-9").value;
    score[active_player] = parseFloat(num_str);
    console.log(score[active_player]);

  }
  else{
    num_str += document.getElementById("btn-9").value //adds number of the string
    score[active_player] = parseInt(num_str); //the value of the first input is the now the string in number form
    console.log(parseFloat(num_str))
  }
  document.querySelector("#score").textContent = num_str; // displays the number being inputted
})

document.getElementById("btn-dot").addEventListener('click', function(){
  dec = true;
  if(score[active_player] == -1){
    score[active_player] = 0.0;
    num_str += "0."
    score[active_player] = score[active_player].toFixed(1);
    score[active_player] = parseFloat(score[active_player]);
    console.log(score[active_player])
  }
  else{
    num_str += document.getElementById("btn-dot").value
    score[active_player] = score[active_player].toFixed(1);
    score[active_player] = parseFloat(score[active_player]);
    console.log(score[active_player]);
  }

  document.querySelector('#score').textContent = num_str;
})


document.getElementById("sum").addEventListener('click', function(){
  dev = false;
  rect = false;
  mult = false;
  sum = true;
  reset_operator_colors();
  nextPlayer();
  if(sum == true){
    document.getElementById("sum").style.color = "red";
  }
})

document.getElementById("rect").addEventListener('click', function(){
  sum = false;
  dev = false;
  mult = false;
  rect = true;
  reset_operator_colors();
  nextPlayer();
  if(rect == true){
    document.getElementById("rect").style.color = "red";
  }
})

document.getElementById("dev").addEventListener('click', function(){
    sum = false;
    rect = false;
    mult = false;
    dev = true;
    reset_operator_colors();
    nextPlayer();
    if(dev == true){
      document.getElementById("dev").style.color = "red";
    }
})

document.getElementById("mult").addEventListener('click', function(){
    dev = false;
    sum = false;
    rect = false;
    mult = true;
    reset_operator_colors();
    nextPlayer();
    if(mult == true){
      document.getElementById("mult").style.color = "red";
    }
})

document.getElementById("return").addEventListener('click', function(){
  if(sum == true){
    roundscore = score[0] + score[1];
  }
  if(rect == true){
    roundscore = score[0] - score[1];
  }
  if(dev == true){
    roundscore = score[0] / score[1];
  }
  if(mult == true){
    roundscore = score[0] * score[1];
  }
  document.querySelector("#score").textContent = roundscore;
  score[0] = roundscore;
  score[1] = -1;
  active_player = 0;
  sum = false;
  rect = false;
  dev = false;
  mult = false;
  reset_operator_colors();

})

document.getElementById("clear").addEventListener('click', function(){
  init();
})

document.getElementById("neg").addEventListener('click', function(){
  if(document.querySelector("#score").textContent != 0){
    score[active_player] *= -1;
    num_str = score[active_player].toString();
    document.querySelector("#score").textContent = num_str;
  }
})

document.getElementById("mplus").addEventListener('click', function(){
  memory_val += roundscore;
  console.log(memory_val)

})

document.getElementById("mminus").addEventListener('click', function(){
  memory_val -= roundscore;
})

document.getElementById("mr").addEventListener('click', function(){
  document.querySelector("#mem").textContent = memory_val;
})

document.getElementById("mc").addEventListener('click', function(){
  memory_val = 0;
  document.querySelector("#mem").textContent = 0;
})

function nextPlayer(){
  if(active_player == 0){
    active_player = 1;
  }
  else if(active_player == 1){
    active_player = 0;
  }
  num_str = " "
}

function reset_operator_colors(){
  document.getElementById("sum").style.color = "black";
  document.getElementById("rect").style.color = "black";
  document.getElementById("dev").style.color = "black";
  document.getElementById("mult").style.color = "black";
  num_str = " "
}

function init(){
  active_player = 0;
  score =[-1,-1];
  roundscore = 0;
  sum = false;
  rect = false;
  dev = false;
  mult = false;
  document.querySelector("#score").textContent = 0;
  document.querySelector("#mem").textContent = 0;
  num_str = " ";
  dec = false;
  memory_val = 0;
}
