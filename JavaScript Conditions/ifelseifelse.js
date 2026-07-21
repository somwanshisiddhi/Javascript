const prompt=require("prompt-sync")();
let marks=parseInt((prompt("enter your marks")));
if(marks>=90)
{
    console.log("grade a");
}else if(marks>=85)
{
    console.log("grade b");
}else   if(marks>=80)
{
    console.log("grade c");
}else{
    console.log("fail");
}
