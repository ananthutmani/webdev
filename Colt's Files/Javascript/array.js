// General body
var ask,quit,x,array=[],i,j=0;
while (quit!=="yes")
{   
    ask= prompt(" Which function do you want to run? \n1.printReverse() \n2.isUniform() \n3.sumArray() \n4.max()");
    // printReverse()
    var ask,quit,x,array=[],i,j=0;
    if (ask==1)
    {
        x= prompt("Enter the numbers in the array. Enter q to stop entering");
        while (x!=="q")
        {
            array.push(x);
            x= prompt("Enter the numbers in the array. Enter q to stop entering");
            console.log("You added an entry!");
        }
        j=1;
        for(i=(array.length-1);i>=0;i--)
        {
            console.log(j+": "+array[i]);
            j++;
        }
    }
    // isUniform()
    else if (ask==2)
    {
        x= prompt("Enter the elements in the array. Enter q to stop entering");
        while (x!=="q")
        {
            array.push(x);
            x= prompt("Enter the elements in the array. Enter q to stop entering");
            console.log("You added an entry!");
        }
        var m= array[0];
        for(i=1;i<(array.length);i++)
        {
            if (m!==array[i])
            {
            j=1;
            console.log("False.");
            }
        }
        if(j!==1)
        console.log("True.");
    }
    // sumArray()
    else if (ask==3)
    {
        x= prompt("Enter the numbers in the array. Enter q to stop entering");
        while (x!=="q")
        {
            array.push(x);
            x= prompt("Enter the numbers in the array. Enter q to stop entering");
            console.log("You added an entry!");
        }
        for(i=0;i<(array.length);i++)
        {
            j= j+(array[i]);
        }
        console.log("The sum is" + j);
    }
    // max()
    else if (ask==4)
    {
        x= prompt("Enter the numbers in the array. Enter q to stop entering");
        while (x!=="q")
        {
            array.push(x);
            x= prompt("Enter the numbers in the array. Enter q to stop entering");
            console.log("You added an entry!");
        }
        j=array[0];
        for(i=1;i<(array.length);i++)
        {
            if(array[i]>j)
            j=array[i];
        }
        console.log("The maximum number is: " +j);
    }
    quit=prompt("Would you like to quit?");
}

