var List= ["abcd"];
var newToDo; 
var toDo= prompt ("Select option");
while (toDo!=="quit")
{
    if (toDo=="new")
    {
        newToDo= prompt("What would you like to do")
        List.push(newToDo);
        console.log("You added an entry!");
    }
    
    else if(toDo=="list")
    {
        console.log ("**********");
        List.forEach(function(x)
        {
           console.log (x);
        });
        console.log ("**********");
    }
    toDo= prompt ("Select option");
}
console.log("You quit the app");