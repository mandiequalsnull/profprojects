var bin_str, bin_num, score, dev, mult, sum, rect, mod, roundscore, active_player, bin_str_sec, anded, orded;

init();

document.getElementById('one').addEventListener('click', function(){
  if(active_player == 0){
    bin_str += document.getElementById('one').value;
    document.querySelector("#score").textContent = bin_str;
    score[active_player] = bin2dec(bin_str);
    console.log(bin_str);
    console.log(bin_str.length);


  }
  else if(active_player == 1){
    bin_str_sec += document.getElementById('one').value;
    document.querySelector("#score").textContent = bin_str_sec;
    score[active_player] = bin2dec(bin_str_sec);
    console.log(score[active_player])
  }
})

document.getElementById('zero').addEventListener('click',function(){
  if(active_player == 0){
    bin_str += document.getElementById('zero').value;
    document.querySelector("#score").textContent = bin_str;
    score[active_player] = bin2dec(bin_str);
    console.log(score[active_player])
    console.log(bin_str);

  }
  else if(active_player == 1){
    bin_str_sec += document.getElementById('zero').value;
    document.querySelector("#score").textContent = bin_str_sec;
    score[active_player] = bin2dec(bin_str_sec);
    console.log(score[active_player])
  }
})

document.getElementById('double_zero').addEventListener('click',function(){
  if(active_player == 0){
    bin_str += document.getElementById('double_zero').value;
    document.querySelector("#score").textContent = bin_str;
    score[active_player] = bin2dec(bin_str);
    console.log(score[active_player])
    console.log(bin_str);

  }
  else if(active_player == 1){
    bin_str_sec += document.getElementById('double_zero').value;
    document.querySelector("#score").textContent = bin_str_sec;
    score[active_player] = bin2dec(bin_str_sec);
    console.log(score[active_player])
  }
})

document.getElementById('r_shift').addEventListener('click',function(){
  if(active_player == 0){
    if(bin2dec(bin_str) > 0){
      bin_str=bin_str.slice(0,-1);
      score[active_player] = bin2dec(bin_str);
      document.querySelector("#score").textContent = bin_str;
      console.log(score[active_player])
      console.log(bin_str);

    }
  }
  else if(active_player == 1){
    if(bin2dec(bin_str_sec) > 0){
      bin_str_sec=bin_str_sec.slice(0,-1);
      score[active_player] = bin2dec(bin_str_sec);
      document.querySelector("#score").textContent = bin_str_sec;
      console.log(score[active_player])
    }
  }
})

document.getElementById('l_shift').addEventListener('click',function(){
  if(active_player == 0){
    if(bin2dec(bin_str) > 0){
      bin_str += document.getElementById('zero').value;
      document.querySelector("#score").textContent = bin_str;
      score[active_player] = bin2dec(bin_str);
      console.log(score[active_player])
      console.log(bin_str);

    }
  }
  else if(active_player == 1){
    if(bin2dec(bin_str_sec) > 0){
      bin_str_sec += document.getElementById('zero').value;
      document.querySelector("#score").textContent = bin_str_sec;
      score[active_player] = bin2dec(bin_str_sec);
      console.log(score[active_player])
    }
  }
})

document.getElementById("and").addEventListener('click',function(){
  dev = false;
  mod = false;
  anded = true;
  rect = false;
  mult = false;
  sum = false;
  orded = false;
  reset_operator_colors();
  nextPlayer();
  if(anded == true){
    document.getElementById("and").style.color = "red";
  }
})

document.getElementById("or").addEventListener('click',function(){
  dev = false;
  anded = false;
  mod = false;
  rect = false;
  mult = false;
  sum = false;
  orded = true;
  reset_operator_colors();
  nextPlayer();
  if(orded == true){
    document.getElementById("or").style.color = "red";
  }
})

document.getElementById('sum').addEventListener('click', function(){
  dev = false;
  anded = false;
  rect = false;
  mod = false;
  mult = false;
  sum = true;
  orded = false;
  reset_operator_colors();
  nextPlayer();
  bin_str = " "
  bin_str_sec = " ";
  if(sum == true){
    document.getElementById("sum").style.color = "red";
  }
})

document.getElementById("rect").addEventListener('click', function(){
  sum = false;
  anded = false;
  dev = false;
  mult = false;
  mod = false;
  rect = true;
  orded = false;
  reset_operator_colors();
  nextPlayer();
  bin_str = " "
  bin_str_sec = " ";
  if(rect == true){
    document.getElementById("rect").style.color = "red";
  }
})

document.getElementById("dev").addEventListener('click', function(){
    sum = false;
    rect = false;
    mult = false;
    anded = false;
    mod = false;
    dev = true;
    orded = false;
    reset_operator_colors();
    nextPlayer();
    bin_str = " ";
    bin_str_sec = " ";
    if(dev == true){
      document.getElementById("dev").style.color = "red";
    }
})

document.getElementById("mult").addEventListener('click', function(){
    dev = false;
    sum = false;
    rect = false;
    anded = false;
    mod = false;
    mult = true;
    orded = false;
    reset_operator_colors();
    nextPlayer();
    bin_str = " ";
    bin_str_sec = " ";
    if(mult == true){
      document.getElementById("mult").style.color = "red";
    }
})

document.getElementById("mod").addEventListener('click', function(){
  sum = false;
  dev = false;
  mult = false;
  rect = false;
  anded = false;
  orded= false;
  mod = true;
  reset_operator_colors();
  nextPlayer();
  bin_str_sec = " ";
  if(mod == true){
    document.getElementById("mod").style.color = "red";
  }
})

document.getElementById("clear").addEventListener('click',function(){
  init();
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
  if(mod == true){
    roundscore = score[0] % score[1];
  }
  if(anded == true){
    var add_bin_str = " ";
    var new_bin_str = " ";
    console.log(bin_str);
    console.log(bin_str_sec.length);
    if(bin_str.length > bin_str_sec.length){
      var difference = bin_str.length - bin_str_sec.length;
      for(var i = 0; i < difference; i++){
        add_bin_str += "0";
      }
      bin_str_sec = add_bin_str + bin_str_sec;
      for(var i = 0; i < bin_str.length; i++){
        if(bin_str[i] == "1" && bin_str_sec[i] == "1"){
          new_bin_str += "1";
        }
        else{
          new_bin_str += "0";
        }
      }
    }
    else if(bin_str_sec.length > bin_str.length){
      var difference = bin_str_sec.length - bin_str.length;
      for(var i = 0; i < difference; i++){
        add_bin_str += "0";
      }
      bin_str = add_bin_str + bin_str;
      for(var i = 0; i < bin_str_sec.length; i++){
        if(bin_str[i] == "1" && bin_str_sec[i] == "1"){
          new_bin_str += "1";
        }
        else{
          new_bin_str += "0";
        }
      }
    }
    else{
      for(var i = 0; i < bin_str_sec.length; i++){
        if(bin_str[i] == "1" && bin_str_sec[i] == "1"){
          new_bin_str += "1";
        }
        else{
          new_bin_str += "0";
        }
      }
    }
    bin_str_sec = " ";
    roundscore = bin2dec(new_bin_str);
  }
  if(orded == true){
    var add_bin_str = " ";
    var new_bin_str = " ";
    console.log(bin_str.length);
    console.log(bin_str_sec.length);
    if(bin_str.length > bin_str_sec.length){
      var difference = bin_str.length - bin_str_sec.length;
      for(var i = 0; i < difference; i++){
        add_bin_str += "0";
      }
      bin_str_sec = add_bin_str + bin_str_sec;
      console.log(bin_str_sec);
      for(var i = 0; i < bin_str.length; i++){
        if(bin_str[i] == "0" && bin_str_sec[i] == "0"){
          new_bin_str += "0";
        }
        else if(bin_str[i] == "0" && bin_str_sec[i] == "1" || bin_str[i] == "1" && bin_str_sec[i] == "0" || bin_str[i] == "1" && bin_str_sec[i] == "1"){
          new_bin_str += "1";
        }
      }
    }
    else if(bin_str_sec.length > bin_str.length){
      var difference = bin_str_sec.length - bin_str.length;
      for(var i = 0; i < difference; i++){
        add_bin_str += "0";
      }
      bin_str = add_bin_str + bin_str;
      console.log(bin_str_sec);
      for(var i = 0; i < bin_str_sec.length; i++){
        if(bin_str[i] == "0" && bin_str_sec[i] == "0"){
          new_bin_str += "0";
        }
        else if(bin_str[i] == "0" && bin_str_sec[i] == "1" || bin_str[i] == "1" && bin_str_sec[i] == "0" || bin_str[i] == "1" && bin_str_sec[i] == "1"){
          new_bin_str += "1";
        }
      }
    }
    else{
      for(var i = 0; i < bin_str_sec.length; i++){
        if(bin_str[i] == "0" && bin_str_sec[i] == "0"){
          new_bin_str += "0";
        }
        else if(bin_str[i] == "0" && bin_str_sec[i] == "1" || bin_str[i] == "1" && bin_str_sec[i] == "0" || bin_str[i] == "1" && bin_str_sec[i] == "1"){
          new_bin_str += "1";
        }
      }
    }
    
    bin_str_sec = " ";
    roundscore = bin2dec(new_bin_str);
  }
  mult = false;
  sum = false;
  rect = false;
  dev = false;
  anded = false;
  orded = false;
  mod = false;
  bin_str = dec2bin(roundscore);
  console.log(roundscore)
  console.log(bin_str)
  score[0] = roundscore;
  score[1] = -1;
  active_player = 0;
  reset_operator_colors();
  document.querySelector("#score").textContent = dec2bin(roundscore);
})

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
function bin2dec(bin){
  return parseInt(bin, 2);
}

function nextPlayer(){
  if(active_player == 0){
    active_player = 1;
  }
  else if(active_player == 1){
    active_player = 0;
  }

}

function reset_operator_colors(){
  document.getElementById("sum").style.color = "black";
  document.getElementById("rect").style.color = "black";
  document.getElementById("dev").style.color = "black";
  document.getElementById("mult").style.color = "black";
  document.getElementById("mod").style.color = "black";
  document.getElementById("and").style.color = "black";
  document.getElementById("or").style.color = "black";

  
}

function init(){
  bin_str = " ";
  bin_str_sec = " ";
  bin_str = bin_str.replace(/\s/g, ''); //takes off empty space in the beggining of a string
  bin_str_sec = bin_str.replace(/\s/g, ''); //takes off empty space in the beggining of a string
  bin_num = 0;
  score = [-1,-1];
  dev = false;
  mult = false;
  sum = false;
  rect = false;
  anded = false;
  orded = false;
  active_player = 0;
  roundscore = 0;
  document.querySelector("#score").textContent = "0";

}
