class Timer {
    //Receive the arguments
    constructor(durationInput, startButton, pauseButton, callbacks){
//store a reference to them
this.durationInput = durationInput;
this.startButton =  startButton;
this.pauseButton = pauseButton;
//Callbacks optional
if (callbacks){
    this.onStart = callbacks.onStart;
    this.onComplete = callbacks.onComplete;
    this.onTick = callbacks.onTick;
}
//bind an event Listener to the Elements
this.pauseButton.addEventListener('click', this.pause);
this.startButton.addEventListener('click', this.start);
    }
    start = ()=>{
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
       this.interval = setInterval(this.tick, 20); // Bei Set Intervall bekommt man eine ID in diesem Fall 1 = timer -> Wird dem this Objekt zugewiesen 
    }
    pause = () => {
       
        clearInterval(this.interval)
    
    }
    tick = () => {
        
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
            
        }else{
       this.timeRemaining = this.timeRemaining -.02;
       if(this.onTick){
this.onTick(this.timeRemaining);
       }
        }
    };
    get timeRemaining(){
       return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);

    }
    
        
        //Ausprobieren
       // document.querySelector("#duration").value = document.querySelector("#duration").value -1
        
    }
