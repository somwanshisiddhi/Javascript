const prompt=require("prompt-sync")();
let num=parseInt((prompt("Enter a number:")));
letstudent={
    name:"siddhi",
    age:18,
    city:"Latur"

}
for(let key in student)
{
    console.log(key+":"+student[key]);
    
}