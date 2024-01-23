 let userscore = 0;
 let computerscore = 0;

 // axis choice class 
 const choi = document.querySelectorAll(".choice");

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
     let number = Math.floor(Math.random()*2);
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
            let win ; 
                if  (userchoice ==="rock" && computerchoice ==="scissors" 
                         || userchoice ==="paper" && computerchoice ==="rock" 
                               || userchoice ==="scissors" && computerchoice ==="paper" )
                    {
                          win = "You win";
                    }
                else 
                    {
                          win = "computer";
                    }
                         //console.log(win);
                          showwinner(win);// call the function
         }
 };

 let draw = () =>
 {
    console.log("the game is draw");
 }
 let showwinner = (win) =>
 {
    console.log("win winner of this game!", win);
 }
