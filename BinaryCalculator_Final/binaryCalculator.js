//Armando Vila (alvila)
//Binary Calculator
var Calc = {

Model : {
  score: [-1,-1],
  num_str: "",
  active_player: 0,
  memory: 0,
  add: false,
  sub: false,
  mult: false,
  dev: false,
  mod: false,
  and: false,
  or: false,
  roundscore: 0,
  decimal: false,
  
},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button_rshift : {id: "button_rshift", type: "button", value: ">>", onclick:""},
  button_lshift : {id: "button_lshift", type: "button", value: "<<", onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button_plus : {id: "button_plus", type: "button", value: '+', onclick:""},
  button_sub : {id: "button_sub", type: "button", value: '-', onclick:""},
  button_mult : {id: "button_mult", type: "button", value: '*', onclick:""},
  button_dev : {id: "button_dev", type: "button", value: '/', onclick:""},
  button_return : {id: "button_return", type: "button", value: '=', onclick:""},
  button_mr : {id: "button_mr", type: "button", value: 'MR', onclick:""},
  button_mc : {id: "button_mc", type: "button", value: 'MC', onclick:""},
  button_mplus : {id: "button_mplus", type: "button", value: 'M+', onclick:""},
  button_mminus : {id: "button_mminus", type: "button", value: 'M-', onclick:""},
  button_c : {id: "button_c", type: "button", value: 'C', onclick:""},
  button_mod : {id: "button_mod", type: "button", value: '%', onclick:""},
  button_and : {id: "button_and", type: "button", value: '&', onclick:""},
  button_or : {id: "button_or", type: "button", value: '|', onclick:""},
  button_not : {id: "button_not", type: "button", value: '~', onclick:""},
},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.button1);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button_plus);
  s += Calc.displayElement(Calc.View.button_sub);
  s += Calc.displayElement(Calc.View.button_mult);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button_return);  
  s += Calc.displayElement(Calc.View.button_dev);
  s += Calc.displayElement(Calc.View.button_mod);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button_c);
  s += Calc.displayElement(Calc.View.button_mr);
  s += Calc.displayElement(Calc.View.button_mminus);
  s += Calc.displayElement(Calc.View.button_mplus);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button_mc);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button_lshift);
  s += Calc.displayElement(Calc.View.button_rshift);
  s += Calc.displayElement(Calc.View.button_and);
  s += Calc.displayElement(Calc.View.button_or);
  s += Calc.displayElement(Calc.View.button_not);
 s += "</tr></td></table>";


  return s;
},

attachHandlers : function() {
  Calc.View.button0.onclick = "Calc.button0Handler()"; 
  Calc.View.button1.onclick = "Calc.button1Handler()"; 
  Calc.View.button_sub.onclick = "Calc.buttonsubHandler()";
  Calc.View.button_plus.onclick = "Calc.buttonplusHandler()";
  Calc.View.button_mult.onclick = "Calc.buttonmultHandler()";
  Calc.View.button_dev.onclick = "Calc.buttondevHandler()";
  Calc.View.button_return.onclick = "Calc.buttonreturnHandler()";
  Calc.View.button_c.onclick = "Calc.buttonCHandler()";
  Calc.View.button_mr.onclick = "Calc.buttonMRHandler()";
  Calc.View.button_mminus.onclick = "Calc.buttonMminusHandler()";
  Calc.View.button_mplus.onclick = "Calc.buttonMplusHandler()";
  Calc.View.button_mc.onclick = "Calc.buttonMCHandler()";
  Calc.View.button_mod.onclick = "Calc.buttonModHandler()";
  Calc.View.button_lshift.onclick = "Calc.buttonLshiftHandler()";
  Calc.View.button_rshift.onclick = "Calc.buttonRshiftHandler()";
  Calc.View.button_and.onclick = "Calc.buttonAndHandler()";
  Calc.View.button_or.onclick = "Calc.buttonOrHandler()";
  Calc.View.button_not.onclick = "Calc.buttonNotHandler()";
},

buttonAndHandler : function(){
  textRow.value = "";
  Calc.Model.and = true;
  Calc.nextPlayer();
  document.getElementById("button_and").style.backgroundColor = "red";
},

buttonOrHandler : function(){
  textRow.value = "";
  Calc.Model.or = true;
  Calc.nextPlayer();
  document.getElementById("button_or").style.backgroundColor = "red";
},

buttonNotHandler : function(){
  var new_str = "";
  for(var i = 0; i < Calc.Model.num_str.length; i++){
    if(Calc.Model.num_str[i] == "1"){
      new_str += "0";
    }
    else if(Calc.Model.num_str[i] == "0"){
      new_str += "1";
    }
  }
  console.log(new_str);
  Calc.Model.num_str = new_str;
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = Calc.bin2dec(Calc.Model.num_str);
},

buttonLshiftHandler : function(){
  Calc.Model.num_str += "0";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = Calc.bin2dec(Calc.Model.num_str);
},

buttonRshiftHandler : function(){
  Calc.Model.num_str = Calc.Model.num_str.slice(0,-1);
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = Calc.bin2dec(Calc.Model.num_str);
},

buttonMCHandler : function(){
  Calc.Model.memory = 0;
},

buttonMminusHandler : function(){
  Calc.Model.memory -= Calc.bin2dec(textRow.value);
},

buttonMplusHandler : function(){
  Calc.Model.memory += Calc.bin2dec(textRow.value);
},

buttonMRHandler : function(){
  textRow.value = Calc.dec2bin(Calc.Model.memory);
},

buttonCHandler : function(){
  textRow.value = "";
  Calc.Model.score = [-1,-1];
  Calc.Model.num_str = "";
  Calc.Model.add = false;
  Calc.Model.sub = false;
  Calc.Model.mult = false;
  Calc.Model.decimal = false;
  Calc.Model.dev = false;
  Calc.Model.active_player = 0;
  Calc.Model.memory = 0;
  Calc.Model.roundscore = 0;
  Calc.Model.memory = 0;
},

button0Handler : function() {
 
  Calc.Model.num_str += "0";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = Calc.bin2dec(Calc.Model.num_str);
  
},

button1Handler : function() {
  
  Calc.Model.num_str += "1";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = Calc.bin2dec(Calc.Model.num_str);
  
},



buttonplusHandler : function() {
  
  textRow.value = "";
  Calc.Model.add = true;
  Calc.nextPlayer();
  document.getElementById("button_plus").style.backgroundColor = "red";


},

buttonsubHandler : function() {
  
  textRow.value = "";
  Calc.Model.sub = true;
  Calc.nextPlayer();
  document.getElementById("button_sub").style.backgroundColor = "red";


},

buttonmultHandler : function() {
  
  textRow.value = "";
  Calc.Model.mult = true;
  Calc.nextPlayer();
  document.getElementById("button_mult").style.backgroundColor = "red";


},

buttondevHandler : function() {
  
  textRow.value = "";
  Calc.Model.dev = true;
  Calc.nextPlayer();
  document.getElementById("button_dev").style.backgroundColor = "red";


},

buttonModHandler : function(){
  textRow.value = "";
  Calc.Model.mod = true;
  Calc.nextPlayer();
  document.getElementById("button_mod").style.backgroundColor = "red";
},

buttonreturnHandler : function() {
  var ret_value = 0;
  if(Calc.Model.add == true){
    ret_value = Calc.dec2bin(Calc.Model.score[0] + Calc.Model.score[1]);
    Calc.Model.roundscore = Calc.Model.score[0] + Calc.Model.score[1];
  }
  if(Calc.Model.sub == true){
    ret_value = Calc.dec2bin(Calc.Model.score[0] - Calc.Model.score[1]);
    Calc.Model.roundscore = Calc.Model.score[0] - Calc.Model.score[1];

  }
  if(Calc.Model.mult == true){
    ret_value = Calc.dec2bin(Calc.Model.score[0] * Calc.Model.score[1]);
    Calc.Model.roundscore = Calc.Model.score[0] * Calc.Model.score[1];
  }
  if(Calc.Model.dev == true){
    ret_value = Calc.dec2bin(Calc.Model.score[0] / Calc.Model.score[1]);
    Calc.Model.roundscore = Calc.Model.score[0] / Calc.Model.score[1];
  }
  if(Calc.Model.mod == true){
    ret_value = Calc.dec2bin(Calc.Model.score[0] % Calc.Model.score[1]);
    Calc.Model.roundscore = Calc.Model.score[0] % Calc.Model.score[1];
  }
  if(Calc.Model.and == true){
    var diff = 0;
    var first_bin_str = Calc.dec2bin(Calc.Model.score[0]);
    var second_bin_str = Calc.dec2bin(Calc.Model.score[1]);
    var final_bin_str = "";
    if(first_bin_str.length > second_bin_str.length){
      diff = first_bin_str.length - second_bin_str.length;
      for(var i = 0; i < diff; i++){
        second_bin_str = "0" + second_bin_str;
      }
      for(var i = 0; i < first_bin_str.length; i++){
        if(first_bin_str[i] == "1" && second_bin_str[i] == "1"){
          final_bin_str += "1";
        }
        else{ 
          final_bin_str += "0";
        }
      }
    }
    else if(second_bin_str.length > first_bin_str.length){
      diff = second_bin_str.length - first_bin_str.length;
        for(var i = 0; i < diff; i++){
          first_bin_str = "0" + first_bin_str;
        }
        for(var i = 0; i < first_bin_str.length; i++){
          if(first_bin_str[i] == "1" && second_bin_str[i] == "1"){
            final_bin_str += "1";
          }
          else{ 
            final_bin_str += "0";
          }
        }
    }
    else{
      for(var i = 0; i < first_bin_str.length; i++){
        if(first_bin_str[i] == "1" && second_bin_str[i] == "1"){
          final_bin_str += "1";
        }
        else{ 
          final_bin_str += "0";
        }
      }
    }
    console.log(final_bin_str);
    ret_value = final_bin_str;
    Calc.Model.roundscore = Calc.bin2dec(final_bin_str);
  }

  if(Calc.Model.or == true){
    var diff = 0;
    var first_bin_str = Calc.dec2bin(Calc.Model.score[0]);
    var second_bin_str = Calc.dec2bin(Calc.Model.score[1]);
    var final_bin_str = "";
    if(first_bin_str.length > second_bin_str.length){
      diff = first_bin_str.length - second_bin_str.length;
      for(var i = 0; i < diff; i++){
        second_bin_str = "0" + second_bin_str;
      }
      for(var i = 0; i < first_bin_str.length; i++){
        if(first_bin_str[i] == "0" && second_bin_str[i] == "0"){
          final_bin_str += "0";
        }
        else{ 
          final_bin_str += "1";
        }
      }
    }
    else if(second_bin_str.length > first_bin_str.length){
      diff = second_bin_str.length - first_bin_str.length;
        for(var i = 0; i < diff; i++){
          first_bin_str = "0" + first_bin_str;
        }
        for(var i = 0; i < first_bin_str.length; i++){
          if(first_bin_str[i] == "0" && second_bin_str[i] == "0"){
            final_bin_str += "0";
          }
          else{ 
            final_bin_str += "1";
          }
        }
    }
    else{
      for(var i = 0; i < first_bin_str.length; i++){
        if(first_bin_str[i] == "0" && second_bin_str[i] == "0"){
          final_bin_str += "0";
        }
        else{ 
          final_bin_str += "1";
        }
      }
    }
    console.log(final_bin_str);
    ret_value = final_bin_str;
    Calc.Model.roundscore = Calc.bin2dec(final_bin_str);
  }
 
  textRow.value = ret_value;
  Calc.Model.score[0] = Calc.Model.roundscore;
  Calc.Model.score[1] = -1;
  Calc.Model.active_player = 0;
  Calc.resetColors();
},

nextPlayer : function(){
  if(Calc.Model.active_player == 0){
    Calc.Model.active_player = 1;
  }
  else if(Calc.Model.active_player == 1){
    Calc.Model.active_player = 0;
  }
  Calc.Model.num_str = "";
},

resetColors: function(){
  Calc.Model.add = false;
  Calc.Model.sub = false;
  Calc.Model.mult = false;
  Calc.Model.dev = false;
  Calc.Model.and = false;
  Calc.Model.or = false;
  Calc.Model.mod = false;
  document.getElementById("button_plus").style.backgroundColor = "white";
  document.getElementById("button_sub").style.backgroundColor = "white";
  document.getElementById("button_mult").style.backgroundColor = "white";
  document.getElementById("button_dev").style.backgroundColor = "white";
  document.getElementById("button_mod").style.backgroundColor = "white";
  document.getElementById("button_and").style.backgroundColor = "white";
  document.getElementById("button_or").style.backgroundColor = "white";
  document.getElementById("button_not").style.backgroundColor = "white";



},

dec2bin: function(dec){
  return (dec >>> 0).toString(2);
},

bin2dec: function(bin){
return parseInt(bin, 2);
}

} // end of Calc;
