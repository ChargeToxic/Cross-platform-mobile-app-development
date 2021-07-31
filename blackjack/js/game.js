/*TO DO:
    Use BlankCards for dealer and have them reveal after player stops
    Change BG DUH
*/




var mon=localStorage
var betselected=false
var gameover=true
var playersum=0
var dealersum=0
var dealeraces=0
var playeraces=0

document.getElementById("quit").addEventListener("click", exit)
document.getElementById("call").addEventListener("click", bet)
document.getElementById("stop").addEventListener("click", end)
document.getElementById("newgame").addEventListener("click", newgame)

window.addEventListener('load', checkmoney, false)
window.addEventListener('load', setGameStatus, false)


function setGameStatus(){
    gameover=true
}

function checkmoney(){
    if(mon.getItem("money")==null)
        mon.setItem("money", 100)
    else if(parseInt(mon.getItem("money"))==0){
        mon.setItem("money", 50)
        alert("Seems like you ran out of money, here's $50 to get you back on track")
    }
    document.getElementById("money").innerHTML="Money: $"+mon.getItem("money")
}

function newgame(){
    window.location.reload()
}

function bet(){
    
    var checker=document.getElementById("betval").value
    //var checker=c.options[c.selectedIndex].value
    //alert(checker)
    var newSource=null
    if(betselected==false &&checker=="none"){
        alert("Please Select A Valid Bet")
    }
    else if(betselected==false && checker !="none"){
        if((parseInt(mon.getItem("money"))>= checker) && gameover){
            betselected=true
            gameover=false
            mon.setItem("money", parseInt(mon.getItem("money"))-checker)
            document.getElementById("money").innerHTML="Money: $"+mon.getItem("money")
            bet()
        }
        else
            alert("Not Enough Money to Place Bet")
    }
    
    else if(gameover){
        alert("Please Start a New Game")
    }
    else if(betselected && !gameover){
        if(document.getElementById("p1").getAttribute("src")=="img/blankcard.png"){
            var t=genRandom()
            adjustplayersum(t)
            newSource=assignCard(t,true)
            //alert(newSource)
            v=document.getElementById("p1")
            v.src=newSource
            
            var t=genRandom()
            adjustplayersum(t)
            newSource=assignCard(t,true)
            //alert(newSource)
            v=document.getElementById("p2")
            v.src=newSource  
            
            var t=genRandom()
            adjustdealersum(t)
            newSource=assignCard(t,false)
            //alert(newSource)
            v=document.getElementById("d1")
            v.src=newSource
            
            var t=genRandom()
            adjustdealersum(t)
            newSource=assignCard(t,false)
            //alert(newSource)
            v=document.getElementById("d2")
            v.src=newSource
            
            var t=genRandom()
            adjustdealersum(t)
            newSource=assignCard(t,false)
            //alert(newSource)
            v=document.getElementById("d3")
            v.src=newSource
            
            if(dealersum<=16){
                var t=genRandom()
                adjustdealersum(t)
                newSource=assignCard(t,false)
                //alert(newSource)
                v=document.getElementById("d4")
                v.src=newSource
            }
            
        }
        
        else if(document.getElementById("p3").getAttribute("src")=="img/blankcard.png"){
            
            var t=genRandom()
            adjustplayersum(t)
            newSource=assignCard(t,true)
            //alert(newSource)
            v=document.getElementById("p3")
            v.src=newSource            
        }
    }
    if(document.getElementById("p3").getAttribute("src")!="img/blankcard.png")
        gameover=true
    
    if(gameover && checker!="none"){
        if(playersum>21){
            document.getElementById("output").innerHTML="PLAYER BUST<br>Player: "+playersum+"<br>Dealer: "+dealersum
        }
        else if(dealersum>21){
            var r=checker*2
            document.getElementById("output").innerHTML="DEALER BUST<br>Player: "+playersum+"<br>Dealer: "+dealersum+"<br>You win $"+r
            victory(r)
        }
        else if(playersum>dealersum){
            var r= checker*2
            document.getElementById("output").innerHTML="PLAYER WIN<br>Player: "+playersum+"<br>Dealer: "+dealersum+"<br>You win $"+(r)
            victory(r)
        }
        else if(playersum<dealersum){
            document.getElementById("output").innerHTML="DEALER WIN<br>Player: "+playersum+"<br>Dealer: "+dealersum
        }
        else{
            document.getElementById("output").innerHTML="TIE<br>Player: "+playersum+"<br>Dealer: "+dealersum+"<br>You get $"+checker
            victory(checker)
        }
    }
    
}

function genRandom(){
    return  (Math.floor(Math.random()*13) +1)
}

function adjustdealersum(cardval){
    
    if(cardval==1)
        dealeraces+=1
    else if(cardval==1 && (dealersum+11)<=21)
        dealersum+=11
    else if(cardval>=10)
        dealersum+=10
    else
        dealersum+=cardval
    while(dealersum>21 && dealeraces!=0){
        dealeraces-=1
        dealersum-=10
    }
        
}

function adjustplayersum(cardval){
    
    if(cardval==1)
        playeraces+=1
    else if(cardval==1 && playersum+11<=21)
        dealersum+=11
    else if(cardval>=10)
        playersum+=10
    else
        playersum+=cardval
    while(playersum>21 && playeraces!=0){
        playeraces-=1
        playuersum-=10
    }
}

function victory(betmoney){
    //alert(betmoney)
    var m=parseInt(mon.getItem("money"))
    //alert(m)
    m+=parseInt(betmoney)
    //alert(m)
    mon.setItem("money", m)
    //alert(mon.getItem("money"))
    checkmoney()
}

function end(){
    gameover=true    
}

function assignCard(num, isPlayer){
    if(isPlayer==true){
        switch (num){
            case 1: return "img/cardimages/AC.png"
                break;
            case 2: return "img/cardimages/2H.png"
                break;
            case 3: return "img/cardimages/3S.png"
                break;
            case 4: return "img/cardimages/4C.png"
                break;
            case 5: return "img/cardimages/5H.png"
                break;
            case 6: return "img/cardimages/6S.png"
                break;
            case 7: return "img/cardimages/7P.png"
                break;
            case 8: return "img/cardimages/8H.png"
                break;
            case 9: return "img/cardimages/9S.png"
                break;
            case 10: return "img/cardimages/10H.png"
                break;
            case 11: return "img/cardimages/JH.png"
                break;
            case 12: return "img/cardimages/QP.png"
                break;
            case 13: return "img/cardimages/KC.png"
                break;
        }
    }
    else if(isPlayer==false){
        switch (num){
            case 1: return "img/cardimages/AD.png"
                break;
            case 2: return "img/cardimages/2D.png"
                break;
            case 3: return "img/cardimages/3D.png"
                break;
            case 4: return "img/cardimages/4D.png"
                break;
            case 5: return "img/cardimages/5D.png"
                break;
            case 6: return "img/cardimages/6D.png"
                break;
            case 7: return "img/cardimages/7D.png"
                break;
            case 8: return "img/cardimages/8D.png"
                break;
            case 9: return "img/cardimages/9D.png"
                break;
            case 10: return "img/cardimages/10D.png"
                break;
            case 11: return "img/cardimages/JD.png"
                break;
            case 12: return "img/cardimages/QD.png"
                break;
            case 13: return "img/cardimages/KD.png"
                break;
                
        }
    }
}

function exit(){
    window.location.replace("index.html")
}

