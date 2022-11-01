let gameStatus =  document.getElementById("gameStatus");
let turn = document.getElementById("turn");

//filling crosses and zeroes
function filling(){
    for (let i = 0; i < fill.length; i++) {
        if (fill[i]==1) {
            document.getElementById(i).innerHTML="X";
        }
        if(fill[i]==-1){
            document.getElementById(i).innerHTML="O";
        }
    }    
}

//winner
function wins(i){
    if(i==1){
        document.getElementById("excited").classList.remove("gif");
        gameStatus.innerHTML="X  wins !";
        turn.innerHTML="GAME FINISH";
    }
    if(i==-1){
        document.getElementById("excited").classList.remove("gif");
        gameStatus.innerHTML="O  wins !";
        turn.innerHTML="GAME FINISH";
    }
}

//checker
function checker(arr,i){
    if(arr[0]==i){
        if(arr[1]==i){
            if(arr[2]==i){
                wins(i);
                return true;
            }
        }
        if(arr[3]==i){
            if(arr[6]==i){
                wins(i);
                return true;
            }
        }
        if(arr[4]==i){
            if(arr[8]==i){
                wins(i);
                return true;
            }
        }
    }
    if(arr[1]==i){
        if(arr[4]==i){
            if(arr[7]==i){
                wins(i);
                return true;
            }
        }
    }
    if(arr[2]==i){
        if(arr[5]==i){
            if(arr[8]==i){
                wins(i);
                return true;
            }
        }
        if(arr[4]==i){
            if(arr[6]==i){
                wins(i);
                return true;
            }
        }
    }
    if(arr[3]==i){
        if(arr[4]==i){
            if(arr[5]==i){
                wins(i);
                return true;
            }
        }
    }
    if(arr[6]==i){
        if(arr[7]==i){
            if(arr[8]==i){
                wins(i);
                return true;
            }
        }
    }
}

// making an array of 9
let fill = [0,0,0,0,0,0,0,0,0];

// checking if its a tie
// function isFull(arr){
//     let ans = true;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == 0){
//             ans=false;
//         }       
//     }
//     if(ans){
//         gameStatus.innerHTML="Its a tie";
//         turn.style.display= "none";
//     }
// }

// picking an index by the computer

// index selector
// function indexSelector(arr){
//     let index =  Math.floor(Math.random()*9);
//     let ans = true;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == 0){
//             ans=false;
//         }       
//     }
//     if(ans){
//         gameStatus.innerHTML="Its a tie";
//         turn.style.display= "none";
//         document.getElementById("gify").classList.remove("tie");
//         return;
//     }
//     if(arr[index]!=0){
//         index = indexSelector(arr);
//     }
//     return index;
// }

//detecting which number did user choose
let value =  1;
let boxes =  document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click",function(){
        if(value==1){
            turn.innerHTML="Turn for O";
        }
        else if(value==-1){
            turn.innerHTML="Turn for X";
        }
        if(fill[i] != 0){
            gameStatus.innerHTML="Thts cheating, lets reset";
            setTimeout(function(){
                window.location = "cheating.html";
            },0)
        }
        fill[i]=value;
        for (let j = 0; j < boxes.length; j++) {
            boxes[j].classList.remove("selected");
        }
        boxes[i].classList.add("selected");
        filling();
        setTimeout(function(){
            checker(fill,value);
            if(value==1){
                value=-1;
            }
            else if(value==-1){
                value=1;
            }
            // if(!checker(fill,1)){
            //     let index = indexSelector(fill);
            // fill[index]=-1;
            // for (let j = 0; j < boxes.length; j++) {
            //     boxes[j].classList.remove("selected");
            // }
            //  boxes[index].classList.add("selected");
            //  filling();
            //  checker(fill,-1);
            let ans = true;
    for (let i = 0; i < fill.length; i++) {
        if(fill[i] == 0){
            ans=false;
        }       
    }
    if(ans){
        gameStatus.innerHTML="Its a tie";
        turn.style.display= "none";
        document.getElementById("gify").classList.remove("tie");
        return;
    }
            }, 500)
    })
}





