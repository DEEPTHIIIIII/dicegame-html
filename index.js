var r1=Math.floor(Math.random()*6)+1;
var i1="images/dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src",i1);


var r2=Math.floor(Math.random()*6)+1;
var i2="images/dice"+r2+".png";
document.querySelectorAll("img")[1].setAttribute("src",i2);


if(r1>r2)
                    document.querySelector("h1").textContent="Player 1 won!!";
else if(r1<r2)
                    document.querySelector("h1").textContent="Player 2 won!!";
else
                    document.querySelector("h1").textContent="Draw !!!";






                    