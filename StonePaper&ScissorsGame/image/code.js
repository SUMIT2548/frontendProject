 let userscore = 0;
 let computerscore = 0;

 const userscorepara = document.querySelector("#user-score");
 const computerchoicepapara = document.querySelector("#comp-score");

 // access choice class 
 const choi = document.querySelectorAll(".choice");
 // access msg id 
 const message  = document.querySelector("#msg");

 // click img as a button 
 choi.forEach((choic) => 
 {
   // console.log(choic);
    choic.addEventListener("click",()=>
    {
       let userchoice = choic.getAttribute("id"); 
     //console.log("choice was click",userchoice);
       // call games 
       playgame(userchoice);
    })
 });

 // create computer choose  function
 let gencompchoo = () =>
 {
     let input = ["rock","paper","scissors"];
     // now crete random number
     let number = Math.floor(Math.random()*3);
     return input[number];
 }

 // create  game rule
 let playgame = (userchoice) =>
 {
      console.log( "user-choice =", userchoice);
      // call computer choice
      let computerchoice = gencompchoo();
      console.log("computer-choice=", computerchoice);
       
      if(userchoice === computerchoice)
      {
        // call darw
        draw();
      }
      else
       {
            let ywin ;
            let cwin 
                if  (userchoice ==="rock" && computerchoice ==="scissors" 
                         || userchoice ==="paper" && computerchoice ==="rock" 
                               || userchoice ==="scissors" && computerchoice ==="paper" )
                    {
                          ywin = "You win";
                    }
                else 
                    {
                          cwin = "computer";
                    }
                         //console.log(win);
                          showwinner(ywin, cwin);// call the function
         }
 };
// draw function
 let draw = () =>
 {
    //console.log("the game is draw");
    message.innerText ="THE GAME IS DRAW"
    message.style.backgroundColor = "#081b31";
 }
 //win fuction 
 let showwinner = (ywin,cwin) =>
 {
    if(ywin)
      {
        // console.log("win winner of this game!", ywin);
         userscore++;
         userscorepara.innerText = userscore;
         message.innerText = "You! win this Game";
         message.style.backgroundColor = "green";
      }
    else 
      {
        // console.log("win winner of this game!", cwin);
         computerscore++;
         computerchoicepapara.innerText = computerscore;
         message.innerText = "Computer! win this Game ";
         message.style.backgroundColor = "red";   
      }
  
 }
