let z=0, c=0, u=0;


function playgame1(choice) {
    const choices=["snake", "water", "gun"];
    let ucount=0, ccount=0;
    const playerChoice=choice;
alert("User chooses " + playerChoice);   
if(!choices.includes(playerChoice)){
    alert("Invalid entry! Pleasae choose from snake, water, gun");
    return;
        }

    const computerChoice=choices[Math.floor(Math.random()*choices.length)];
alert("Computer chooses " + computerChoice);

if (playerChoice===computerChoice){
    alert("It's a tie!");
}
else if(
    (playerChoice==="snake" && computerChoice==="water")||
    (playerChoice==="water" && computerChoice==="gun")||
    (playerChoice==="gun" && computerChoice==="snake"))
{
alert("You won!");
    u=u+1;
    ucount=1;
}
    
else {
    alert("Computer wins!");
    c=c+1;
    ccount=1;
     }
alert("Ucount " + ucount);
alert("Ccount " + ccount);
if(ccount=1)
{
m=1;
}
if(ucount=1){
    m=2;
}
changeContent();
m=0;
};



function changeContent()
{
rn = m;
cn = window.prompt("Input the Column number(0,1)","0");
content = "1";  
var x=document.getElementById('table').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
rn=0;
}