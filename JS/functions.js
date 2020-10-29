function write(id,msg,msg_tag,msg_class){
    /*
    This function is to write the messages.
    In this project we have used this function to write messages to chat window.
    for eg:
     write("chat","Hello world,"p","bot");
     if we call like this...
     Then "Hello world is displayed as bot message in the page"
    */
    var node = document.createElement(msg_tag);
    node.classList.add(msg_class);
    var textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    document.getElementById(id).appendChild(node);
  }
  
  function scrollwin() {
    //This function is to scroll the chat window automatically
    document.getElementById("chat").scrollBy(0, 1000);
  }
  
  function talk(){
    /* Whenever user sends a message 
    This function takes user input and 
    performs the corresponding task
    */
    var user_choice=document.getElementById("input").value;
    write("chat",user_choice,"p","user");
    document.getElementById("input").value="";
    /*
    user_choice is the message sent by user
    */
    if(user_choice==1){
        give_joke();
    }
  
    else if(user_choice==2){
      Games();
    }
  
    /*
    If user choice is 3 then bot will give the current time.Below code is to get the current time
    */
    else if(user_choice==3){
        var d= new Date();
        var minutes=d.getMinutes();
        if(minutes<10){minutes="0"+minutes}
        var msg=`The Current Time is ${d.getHours()}:${minutes}:${d.getMilliseconds()}`;
        write("chat",msg,"p","bot");
    }
    
    else if(user_choice==4){
      msg="Thanks for using me,See you soon..... ";
      write("chat",msg,"p","bot");
      document.getElementById("input-box").style.display="None";
      
    }
    /*
    If user enters anything otherthan 1-4 it displays the below message.
    */
    else{
      msg="Enter Proper input";
      write("chat",msg,"p","bot");
    }
      scrollwin();
  }
  
  
  function Games(){
  
    /*
    When this function is called bot plays games with user
    */
    //It disappears input box and displays game buttons
    document.getElementById("input-box").style.display="none";
    msg="Select a game";
    write("chat",msg,"p","bot");
    var arr=["RPS","Number Guessing","Exit"];
    //Below code is to create buttons.
    for(i=0;i<3;i++){
      btn = document.createElement("button");
      btn.innerHTML=arr[i];
      arr[i]=btn;
      arr[i].classList.add("Game_Button");
    }
    /*Here we are calling the games based on user choice.
    If user clicks any button then game corresponding to that button will be invoked
    */
    arr[0].onclick = function() {RPS(arr)};
    arr[1].onclick = function() {NumberGuessing(arr)};
    arr[2].onclick = function() {Disabler(arr,"go to input")};
  
    for(i=0;i<3;i++){
      document.getElementsByClassName("ButtonList")[0].appendChild(arr[i]);
    }
  
    scrollwin();
  }
  
  
  function RPS(ar){
    //This function implements Rock,Paper,Scissor game
    Disabler(ar,"just disappear");//This line disables the previous game buttons to create space for displaying RPS images
    document.getElementById("input-box").style.display="none";
    msg="Welcome to Rock Paper Scissor,Click on the image of your choice";
    write("chat",msg,"p","bot");
    var arr=["Rock","Paper","Scissor","Exit"];
    for(i=0;i<4;i++){
      btn = document.createElement("input");
      btn.type="image";
      btn.src="Images/RPSimg"+(i+1)+".png";
      btn.width=30;
      btn.height=30;
      arr[i]=btn;
      arr[i].classList.add("Game_Button2");
    }
    //Above code creates the rock paper scissor Images
    
    arr[0].onclick = function() {winner(0)};
    arr[1].onclick = function() {winner(1)};
    arr[2].onclick = function() {winner(2)};
    arr[3].onclick = function() {Disabler(arr,"go to games")};
    for(i=0;i<4;i++){
      document.getElementsByClassName("ButtonList")[0].appendChild(arr[i]);
    }
    /*In the above code we displayed rock paper scissor images and wrote the actions which occur on clicking those images*/
    scrollwin();
  }
  
  
  function NumberGuessing(ar){
    //This function implements number  guessing game
    Disabler(ar,false);//This line disables the previous game buttons to create space for displaying number images
    document.getElementById("input-box").style.display="none";
    var msg="Welcome to number Guessing Game,Select a number by clicking on it";
    write("chat",msg,"p","bot");
    var arr=["1","2","3","4","5","6","Exit"];
    for(i=0;i<7;i++){
      btn = document.createElement("input");
      btn.type="image";
      btn.src="Images/number"+(i+1)+".jpg";
      btn.width=30;
      btn.height=30;
      arr[i]=btn;
      arr[i].classList.add("Game_Button1");
    }
    //Above code creates the rock paper scissor Images
    arr[0].onclick = function() {winnerNumberGuess(1)};
    arr[1].onclick = function() {winnerNumberGuess(2)};
    arr[2].onclick = function() {winnerNumberGuess(3)};
    arr[3].onclick = function() {winnerNumberGuess(4)};
    arr[4].onclick = function() {winnerNumberGuess(5)};
    arr[5].onclick = function() {winnerNumberGuess(6)};
    arr[6].onclick = function() {Disabler(arr,"go to games")};
    for(i=0;i<7;i++){
      document.getElementsByClassName("ButtonList")[0].appendChild(arr[i]);
    }
    /*In the above code we displayed rock paper scissor images and wrote the actions which occur on clicking those images*/
    scrollwin(); 
  }
  
  function Disabler(arr,flg){
    //This function removes buttons in the array arr
    for(i=0;i<arr.length;i++){
      arr[i].style.display="none";
    }
    // if flg is "go to input" then it displays input buttons
    if(flg=="go to input"){
      msg="Thans for playing games with me";
      write("chat",msg,"p","bot");
      document.getElementById("input-box").style.display="block";
    }
    //if flg is "go to games" it displays game butotns
    else if(flg=="go to games"){
      Games();
    }
    scrollwin();
  }
  
  function winner(user_choice){
    //This function takes user choice and bot choice and displays the result of rock paper scissor game
    bot_choice=Math.floor(Math.random() * 100)%3;
    var winner_moves={0:2,1:0,2:1};
    var arr=["Rock","Paper","Scissor"];
    var msg="Bot: "+arr[bot_choice]+" You:  "+arr[user_choice];
    if(bot_choice==user_choice){
      msg=msg+"   ==>  So it's a Draw!!!";
    }
    else if(winner_moves[bot_choice]==user_choice){
      msg=msg+"   ==>  So I won";
    }
    else{
      msg=msg+"  ==>  So You won";
    }
    write("chat",msg,"p","bot");
    scrollwin();
  }
  
  function winnerNumberGuess(num){
    //This function takes the user input and inside this function bot selects its number and result of number guessing game is written to chat window.
    bot_choice=Math.floor(Math.random() * 100)%6+1;
    var msg="You've selected "+num+" My choice was "+bot_choice;
    if(bot_choice==num){
      msg=msg+" ==> You Won :)";
    }
    else{
      msg=msg+" ==> Better luck next time :(";
    }
    write("chat",msg,"p","bot");
    scrollwin();
  }
  
  function give_joke(){
    /* 
    This function fetches a joke from
    https://rapidapi.com/LemmoTresto/api/joke3/endpoints
    the above api.
    */
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://joke3.p.rapidapi.com/v1/joke",
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "joke3.p.rapidapi.com",
          "x-rapidapi-key": "a73b34cebemshfd7251407fa3cebp1eda16jsn2b346ce5a30b"
        }
    }
  
    $.ajax(settings).done(function (response) {
      var node1 = document.createElement("p");
      node1.classList.add("bot")
      var textnode1 = document.createTextNode(response.content);
      node1.appendChild(textnode1);
      document.getElementById("chat").appendChild(node1);
    scrollwin();
    });
  
  }
  
  
  function theme(){
  
    //This function is used to change the themes.
    var user_value=document.getElementById("themes").value;
    if(user_value=="Dark"){
    document.getElementById('main-box').style.backgroundImage = 'url("dummy.jpg")';
    document.body.style.backgroundColor ="black";
    }
    else if(user_value=="Theme1"){
      document.getElementById('main-box').style.backgroundImage = 'url("Images/chatbackground3.jpg")';
      }
    else if(user_value=="Theme2"){
      document.getElementById('main-box').style.backgroundImage = 'url("Images/chatbackground2.jpg")';
      }
      else if(user_value=="default"){
      document.getElementById('main-box').style.backgroundImage = 'url("Images/chatbackground.jpg")';
      }
  }
  
  
  
  
  