let boxes = document.querySelectorAll(".box");
let resset = document.querySelector("#reset-but");
let newgbutton = document.querySelector("#newbutton");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-con");

let turnO = true;
let count = 0; // for count number in draw
// create win chances by array
let winpossibility = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];

// now all button use to click 
boxes.forEach( (box)=>
{
   box.addEventListener("click",()=>
   {
    if (turnO)
     {
        //playerO
        box.innerText = "O";
        turnO = false;
      }
       else 
       {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;// ture means only one time click all boxes 
      winchances();  // this funtion link with box Win formula
      // now game dram  
       count++;
       //console.log(count);
       let iswinner = winchances();

       if(count===9 && !iswinner)
       {
       // console.log("draw");
        gamedraw();
       } 
   })
})
// now win chancees link with box / button 
// create a arrow function 
const winchances = () =>
{
    for(let win of winpossibility)
    {
      //now every box print a specific word O OR X
       /*console.log ( boxes[win[0]].innerHTML,
                    boxes[win[1]].innerHTML, 
                    boxes[win[2]].innerHTML);*/

        // now, all box value store the variable  
        let position1 = boxes[win[0]].innerText;
        let position2 = boxes[win[1]].innerText;
        let position3 = boxes[win[2]].innerText;

        // now win codition 
        if(position1 != "" && position2 !="" && position3 !="")  // !="" means not blank
        {
            if (position1 === position2 && position2 === position3)
            {
                //console.log("winner",position1);
                showwinner(position1); // call function
                return true;
            }
        }
        
    }
}
// create a function to pass winner msg
let showwinner =(winner)=>
{
   msg.innerText =  `Congratulations, Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   // call a function 
   disableboxes();
}
// create a function after win game and total game is off
const disableboxes =() =>
{
 for(let box of boxes)
 {
    box.disabled=true;
 }
}
// function of draw
const gamedraw =() =>
{
    msg.innerHTML = "The Game was draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
}

// now restart gane 
const restart =() =>
{
    trunO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    count =0 ;
}

// create enableboxes function , after click restart or new game then its open the game is on
const enableboxes = () =>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerHTML =""; // after restart or new click then box showing blank 
    }
}

resset.addEventListener("click",restart);
newgbutton.addEventListener("click",restart);
