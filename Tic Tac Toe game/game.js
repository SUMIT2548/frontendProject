let boxes = document.querySelectorAll(".box");
let resset = document.querySelector("#reset-but");

let turnO = true; // playerX , playerO

const winformation = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

 boxes.forEach( (box) => 
   { 
       box.addEventListener("click",()=>
       {
          if(turnO === true) 
           {
              box.innerHTML = "O";  // player O
              turnO = false;
            }
            else 
           {
                box.innerHTML = "x"; // player X
                turnO =true;
            } 
           box.disabled = true;
           checkwinner(); // function defined under box

        });
    });

 // create a function
 const checkwinner = () =>
 {
    for(let win of winformation)
    {
        console.log(win[0],win[1],win[2]);
        console.log(
            boxes[win[0]].innerHTML,
            boxes[win[1]].innerHTML,
            boxes[win[2]].innerHTML
        );
    }
 };