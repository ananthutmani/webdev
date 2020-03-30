var moviearray=[ 
{name:"Pulp Fiction", rating: 4.1, watched:"have watched"},
{name:"The Triangle", rating: 3.9, watched:"have not watched"},
{name:"40 year old virgin", rating: 4.1, watched:"have watched"},
{name:"The Great Gatsby", rating: 4.6, watched:"have watched"},
{name:"Evil Dead", rating: 2.9, watched:"have not watched"}
];
var q=prompt("What would you like to do? \n1.Movie Details\n2.Quit");
while(q==1)
{
    var x=prompt("Which movie's status would you like to view?\n1. Pulp Fiction\n2. The Triangle\n3. 40 Year Old Virgin\n4. The Great Gatsby\n5. Evil Dead");
    var y=x-1;
    console.log("You "+ moviearray[y].watched+ " \"" +moviearray[y].name+"\" - "+ moviearray[y].rating +" stars");
    q= prompt("What would you like to do? \n1.Movie Details\n2.Quit");
}
if (q==2)
console.log("You have quit the app.");
else
console.log("Invalid input.");