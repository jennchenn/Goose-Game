var counter = 0;
var time =false;

function show (toBlock){
setDisplay(toBlock, 'block');
}
function hide (toNone) {
setDisplay(toNone, 'none');
}
function setDisplay (target, str) {
document.getElementById(target).style.display = str;
}

// ID SELECTION IN jQUERY
// $("#egg")
// $(".myClass")



$(document).ready(function() {
  function spawnEgg() {
    console.log("HI I LIKE EGGS");
    // add egg to dom, randomize it;s position;
    $('<img class="egg" src="https://scontent-yyz1-1.xx.fbcdn.net/v/t34.0-12/17270280_859046807569782_297555778_n.png?oh=be14ee20936534f90cf2af2ffc381d3e&oe=58C73A2B">').on('load', function() {
      $(this).css('top', Math.floor(Math.random()*(600 - $(this).height())));
      $(this).css('left', Math.floor(Math.random()*(900 - $(this).width())));
      $(this).appendTo('body');
      $(this).unbind().on('click', function() {
        $(this).css('top', Math.floor(Math.random()*(600 - $(this).height())));
        $(this).css('left', Math.floor(Math.random()*(900 - $(this).width())));
        //if egg
        console.log("clicked!");

        if ($(this).is('.egg')) {
            $(this).attr('src', 'https://scontent-yyz1-1.xx.fbcdn.net/v/t34.0-12/17274779_859003084240821_1030028348_n.png?oh=70aba98672c4b194711358b31a53b2fc&oe=58C7B297');
            $(this).addClass('baby').removeClass('egg');
            console.log("baby");
            counter++;
          } else if($(this).is('.baby')) {
            $(this).attr('src', 'https://scontent-yyz1-1.xx.fbcdn.net/v/t34.0-12/17270455_859155897558873_1665356325_n.png?oh=5c9d96aba308ee32fb25e47dc48e6ae5&oe=58C75814');
            $(this).addClass('grad').removeClass('baby');
            console.log("grad");
            counter+=2;
          }  else if ($(this).is('.grad')){
            $(this).attr('src', 'https://scontent-yyz1-1.xx.fbcdn.net/v/t34.0-12/17274687_859046800903116_1759170423_n.png?oh=e5d574a498a88f54f1d7257644ee7d18&oe=58C865F5');
            $(this).addClass('adult').removeClass('grad');
            console.log("adult");
            counter+=3;
          }  else if ($(this).is('.adult')){
            $(this).attr('src', 'https://scontent-yyz1-1.xx.fbcdn.net/v/t34.0-12/17238827_859046814236448_1660820153_n.png?oh=e92286a4e7e8b382dc8f6d86c0056aee&oe=58C76464');
            $(this).addClass('old').removeClass('adult');
            console.log("old");
            counter+=4;
          }  else if ($(this).is('.old')){
            $(this).attr('src', 'https://scontent-yyz1-1.xx.fbcdn.net/v/t34.0-12/17275003_859046804236449_2037022941_n.png?oh=4dde378c6a19d807f63abfce6c462b66&oe=58C7AE20');
            $(this).addClass('dead').removeClass('old');
            console.log("dead");
            counter+=5;
          }  else {
            $(this).addClass('none').removeClass('dead');
            $(this).attr('src', '');
            console.log("end");
            counter+=6;
          }
      }
    )
  }
)
}


  setInterval(spawnEgg, 2000);
});





var isWaiting = false;
var isRunning = false;
var seconds = 30;
var countdownTimer;
var finalCountdown = false;

function GameTimer() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('waiting_time').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds === 0) {
        isRunning = true;
        confirm ("Total number of points: " + counter);
        clearInterval(countdownTimer);

        if (finalCountdown) {
            clearInterval(countdownTimer); // Clear the interval to stop the loop
        } else {
            finalCountdown = true; // This will allow the 2 additional seconds only once.
        }

    } else {
        isWaiting = true;
        seconds--;
    }
}
countdownTimer = setInterval(GameTimer, 1000);
