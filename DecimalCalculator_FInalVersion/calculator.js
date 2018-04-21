//Armando Vila (alvila)
//Decimal Calculator
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
  roundscore: 0,
  decimal: false,
  
},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button_dot : {id: "button_dot", type: "button", value: ".", onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button2 : {id: "button2", type: "button", value: 2, onclick:""},
  button3 : {id: "button3", type: "button", value: 3, onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button5 : {id: "button5", type: "button", value: 5, onclick:""},
  button6 : {id: "button6", type: "button", value: 6, onclick:""},
  button7 : {id: "button7", type: "button", value: 7, onclick:""},
  button8 : {id: "button8", type: "button", value: 8, onclick:""},
  button9 : {id: "button9", type: "button", value: 9, onclick:""},
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
  button_neg : {id: "button_neg", type: "button", value: '+/-', onclick:""},
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
  s += Calc.displayElement(Calc.View.button7);
  s += Calc.displayElement(Calc.View.button8);
  s += Calc.displayElement(Calc.View.button9);
  s += Calc.displayElement(Calc.View.button_plus);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button4);
  s += Calc.displayElement(Calc.View.button5);
  s += Calc.displayElement(Calc.View.button6);
  s += Calc.displayElement(Calc.View.button_sub);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += Calc.displayElement(Calc.View.button2);
  s += Calc.displayElement(Calc.View.button3);
  s += Calc.displayElement(Calc.View.button_mult);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.button_dot);
  s += Calc.displayElement(Calc.View.button_return);  
  s += Calc.displayElement(Calc.View.button_dev);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button_c);
  s += Calc.displayElement(Calc.View.button_mr);
  s += Calc.displayElement(Calc.View.button_mminus);
  s += Calc.displayElement(Calc.View.button_mplus);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button_mc);
  s += Calc.displayElement(Calc.View.button_neg);
  s += "</tr></td></table>";


  return s;
},

attachHandlers : function() {
  Calc.View.button0.onclick = "Calc.button0Handler()"; 
  Calc.View.button1.onclick = "Calc.button1Handler()"; 
  Calc.View.button2.onclick = "Calc.button2Handler()"; 
  Calc.View.button3.onclick = "Calc.button3Handler()"; 
  Calc.View.button4.onclick = "Calc.button4Handler()"; 
  Calc.View.button5.onclick = "Calc.button5Handler()"; 
  Calc.View.button6.onclick = "Calc.button6Handler()"; 
  Calc.View.button7.onclick = "Calc.button7Handler()"; 
  Calc.View.button8.onclick = "Calc.button8Handler()";
  Calc.View.button9.onclick = "Calc.button9Handler()";
  Calc.View.button_sub.onclick = "Calc.buttonsubHandler()";
  Calc.View.button_plus.onclick = "Calc.buttonplusHandler()";
  Calc.View.button_mult.onclick = "Calc.buttonmultHandler()";
  Calc.View.button_dev.onclick = "Calc.buttondevHandler()";
  Calc.View.button_return.onclick = "Calc.buttonreturnHandler()";
  Calc.View.button_dot.onclick = "Calc.buttondotHandler()";
  Calc.View.button_c.onclick = "Calc.buttonCHandler()";
  Calc.View.button_mr.onclick = "Calc.buttonMRHandler()";
  Calc.View.button_mminus.onclick = "Calc.buttonMminusHandler()";
  Calc.View.button_mplus.onclick = "Calc.buttonMplusHandler()";
  Calc.View.button_mc.onclick = "Calc.buttonMCHandler()";
  Calc.View.button_neg.onclick = "Calc.buttonNegHandler()";
},

buttonNegHandler : function(){
  if(Calc.Model.score[Calc.Model.active_player] > 0){
    Calc.Model.score[Calc.Model.active_player] *= -1;
    textRow.value = "-" + Calc.Model.num_str;
  }
},

buttonMCHandler : function(){
  Calc.Model.memory = 0;
},

buttonMminusHandler : function(){
  if(Calc.Model.decimal == true){
    Calc.Model.memory = 0.0;
    Calc.Model.memory -= parseFloat(textRow.value);
  }
  else{
    Calc.Model.memory -= parseInt(textRow.value);
  }
},

buttonMplusHandler : function(){
  if(Calc.Model.decimal == true){
    Calc.Model.memory = 0.0;
    Calc.Model.memory += parseFloat(textRow.value);
  }
  else{
    Calc.Model.memory += parseInt(textRow.value);
  }
},

buttonMRHandler : function(){
  if(Calc.Model.memory == 0){
    textRow.value = "";
  }
  else{
    textRow.value = Calc.Model.memory.toString();
  }
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

buttondotHandler : function() {
  Calc.Model.decimal = true;
  if(Calc.Model.score[Calc.Model.active_player] == -1){
    Calc.Model.num_str += "0.";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = 0.0;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.score[Calc.Model.active_player]);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
    Calc.Model.num_str += ".";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = Calc.Model.score[Calc.Model.active_player].toFixed(1);
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.score[Calc.Model.active_player]);
  }
},

button0Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "0";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
    Calc.Model.num_str += "0";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }
},

button1Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "1";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
    Calc.Model.num_str += "1";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }
},

button2Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "2";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
  Calc.Model.num_str += "2";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }
},

button3Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "3";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
  Calc.Model.num_str += "3";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }

},

button4Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "4";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
  Calc.Model.num_str += "4";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }
},

button5Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "5";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
  Calc.Model.num_str += "5";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }

},

button6Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "6";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
  Calc.Model.num_str += "6";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }

},

button7Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "7";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
  Calc.Model.num_str += "7";
  textRow.value += "7";
  Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }

},

button8Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "8";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
  Calc.Model.num_str += "8";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }

},

button9Handler : function() {
  if(Calc.Model.decimal == true){
    Calc.Model.num_str += "9";
    textRow.value = Calc.Model.num_str;
    Calc.Model.score[Calc.Model.active_player] = parseFloat(Calc.Model.num_str);
    console.log(Calc.Model.score[Calc.Model.active_player]);
  }
  else{
  Calc.Model.num_str += "9";
  textRow.value = Calc.Model.num_str;
  Calc.Model.score[Calc.Model.active_player] = parseInt(Calc.Model.num_str);
  }

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

buttonreturnHandler : function() {
  var ret_value = 0;
  if(Calc.Model.add == true){
    ret_value = Calc.Model.score[0] + Calc.Model.score[1];
    Calc.Model.roundscore = Calc.Model.score[0] + Calc.Model.score[1];
  }
  if(Calc.Model.sub == true){
    ret_value = Calc.Model.score[0] - Calc.Model.score[1];
    Calc.Model.roundscore = Calc.Model.score[0] - Calc.Model.score[1];

  }
  if(Calc.Model.mult == true){
    ret_value = Calc.Model.score[0] * Calc.Model.score[1];
    console.log(ret_value);
    Calc.Model.roundscore = Calc.Model.score[0] * Calc.Model.score[1];
  }
  if(Calc.Model.dev == true){
    ret_value = Calc.Model.score[0] / Calc.Model.score[1];
    Calc.Model.roundscore = Calc.Model.score[0] / Calc.Model.score[1];
  }
 
  textRow.value = ret_value.toString();
  Calc.Model.score[0] = Calc.Model.roundscore;
  Calc.Model.score[1] = -1;
  Calc.Model.active_player = 0;
  Calc.resetColors();
  Calc.Model.decimal = false;

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
  document.getElementById("button_plus").style.backgroundColor = "white";
  document.getElementById("button_sub").style.backgroundColor = "white";
  document.getElementById("button_mult").style.backgroundColor = "white";
  document.getElementById("button_dev").style.backgroundColor = "white";

}

} // end of Calc;
