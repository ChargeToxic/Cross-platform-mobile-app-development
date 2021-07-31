function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
   var c = die.dataset.roll = getRandomNumber(1, 6);
      
    call(c);
      

  });
}
function call(e)
{
   z=z+1;
    if(z==3||z==4)
        {
   d=d+e;
    f=f+1;}
    if (f==2)
        {
            document.getElementById("roll-button").disabled = true;
            
            z=0;
            f=0;
            total=d;
            setTimeout(function(){ document.getElementById("roll-button").disabled = false; d=0;}, 2000);
            stat();
            
            
        }
    
}
function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ch=0;
var win=0;
var u=0;
var l=0;
var d=0;
var bt=0;
var total=0;
var z=0;
var f=0;
var e=0;
var c=0;
var d=0;
var bet1=0;
var bet2=0;
var bet3=0;
var tot=0;
var loss=0;
document.getElementById("roll-button").addEventListener("click", rollDice , rollDice2);

function rollDice2() {
  const dice2 = [...document.querySelectorAll(".die-list2")];
  dice2.forEach(die => {
    toggleClasses2(die);
    var d = die.dataset.roll = getRandomNumber2(1, 6);
      alert("val are"+c+d);
  });
}
function toggleClasses2(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}
function getRandomNumber2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function stat()
{
   bet1=document.getElementById("betval1").value;
    bet1=parseInt(bet1);
   bet2=document.getElementById("betval2").value;
     bet2=parseInt(bet2);
    bet3=document.getElementById("betval3").value;
     bet3=parseInt(bet3);
    tot=mon.getItem("money");
    tot=parseInt(tot);
    bt=bet1+bet2+bet3;
   
    if(tot>=bt && bt!=0)
        {
            if(bet1>0)
                {
                    u=1;
                    
                }
            if(bet2>0)
                {
                    l=1;
                    
                }
            if(bet3>0)
                {
                    d=1;
                    
                }
            lets();
            
            
            
        }
    else{
        alert("set a valid bet");
        window.location.reload();
    }
    
}
var mon=localStorage
window.addEventListener('load', checkmoney, false)
function checkmoney(){
    if(mon.getItem("money")==null)
        mon.setItem("money", 100)
    else if(parseInt(mon.getItem("money"))==0){
        mon.setItem("money", 50)
        alert("Seems like you ran out of money, here's $50 to get you back on track")
    }
    document.getElementById("money").innerHTML="Money: $"+mon.getItem("money")
}

function lets()
{
    if(u==1)
        {
            if(total>7)
                {
                   win=win+(bet1); 
                }
            else
                {
                  loss=loss+bet1;
                    
                }
        }
     if(l==1)
        {
            if(total==7)
                {
                   win=win+(bet2*2); 
                }
            else
                {
                  loss=loss+bet2;
                    
                }
        }
     if(d==1)
        {
            if(total<7)
                {
                   win=win+(bet3); 
                }
            else
                {
                  loss=loss+bet3;
                    
                }
        }
    loss=parseInt(loss);
    setmoney();
}
 function setmoney()
{
    
     ch=win-loss;
    
    
                
           
    if(ch>0)
        {
           tot=tot+ch; 
            mon.setItem("money",tot);

            setTimeout(function(){  alert("You have won "+ch);window.location.reload();}, 2000);
           
        }
    else if (ch==0)
        {
           tot=tot+ch; 
            mon.setItem("money",tot);

            setTimeout(function(){  alert("no win no loss ");window.location.reload();}, 2000); 
        }
   
    
    else
        

        {
            tot=tot+ch;
    mon.setItem("money",tot);
                
            
            setTimeout(function(){ alert("you have lost "+ch);window.location.reload();}, 2000);
            
        }
     
}