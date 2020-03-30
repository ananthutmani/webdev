var num;
var x=0;
while(x!==1)
{
num= prompt("Enter the number");
if (num<25)
    {
    alert("Your Guess is too low!");
    } 
    else if (num==25)
        {
        alert("Correct Answer!"); 
        x=1; 
        }
else
    {
        alert("Your Guess is too high!");
    }
}
