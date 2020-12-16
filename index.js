// Event listener to watch for a click on 'startt' button
//Draw a full border around the timer
//Start counting down the timer
//Each time the timr counts down, update the border
//Each time the timer counts down, update the text
//If we counted down and timer reaches =
//Reset  the border 
//Reset the internal Timer to get ready for another run

    //Create functions/Class Properties 
 

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
//dynamic area circle
const perimeter = circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
console.log("Timer has started")
},
onTick(timeRemaining){
circle.setAttribute('stroke-dashoffset', 
perimeter * timeRemaining / duration - perimeter
);

},
onComplete(){
console.log("pause")
}
});