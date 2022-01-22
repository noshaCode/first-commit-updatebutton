//get our elements


const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const progress = player.querySelector(".progress")
const progressFilled= player.querySelector(".progress__filled")
const  toggle = player.querySelector(".toggle")
const  skipButtons = player.querySelectorAll("[data-skip]")
const ranges = player.querySelector(".player__slider")


//Build our functions
function playandpause(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updateButton(){
  
 toggle.textContent = this.paused ? '►' :'❚ ❚';
  
}

function skip(){
    console.log(this.dataset);
    // video.currentTime +=
}

// hook up the event listners
video.addEventListener("click",playandpause);
toggle.addEventListener("click",playandpause);
video.addEventListener("play",updateButton);
video.addEventListener("pause",updateButton);
// skipButtons.forEach(button=> button.addEventListener("click",skip));
