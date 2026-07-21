const prompt=require("prompt-sync")();
let num=parseInt((prompt("enter a day:")));
let DAY=2;
switch(DAY){
    case 1:console.log("monday");
    break;
    case 2:console.log("tuesday");
    break;
    case 3:console.log("wednesday");
    break;
    default:console.log("invalid day");
}
