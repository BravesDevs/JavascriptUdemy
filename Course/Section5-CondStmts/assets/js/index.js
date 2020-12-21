var JavaScript = parseInt(prompt("Enter JavaScript"));
var Java = parseInt(prompt("Enter Java"));
var sum = JavaScript + Java;
if(sum>=80 && sum < 100)
{
    document.write("A");
}
else if(sum > 50 && sum < 80) 
{
    document.write("B")
}
else{
    document.write("Fail")
}

document.write("Results Announced");