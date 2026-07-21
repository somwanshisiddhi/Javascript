const prompt=require("prompt-sync")();
let num=parseInt((prompt("enter your age")));
let age=25
let  nothaslicense=false
if(age>=25)
{
    if(nothaslicense==false){
        console.log("you are free to drive");
    
    }else{
        console.log("nooo you can't drive");
    }
}