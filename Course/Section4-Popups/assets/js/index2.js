var num1=parseInt(prompt("Enter number1"));
var num2=parseInt(prompt("Enter number2"));

if(num1!=null && num2!=null){
    document.write(num1+num2);
}
else{
    document.write(Math.max(num1,num2));
}

document.write("Working Good!!!!");