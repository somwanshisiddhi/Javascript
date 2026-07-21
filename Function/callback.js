function greet(number)
{
  console.log("call the no."+number);
}
function user(callback)
{
    callback("100")
}
user(greet)