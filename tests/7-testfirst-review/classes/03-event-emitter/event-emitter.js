/* eslint-disable no-unused-vars */

class MyEventEmitter{
    constructor(){
        this.events={};
    }

    //Method for adding event listner
    addListener(event, callback){
        if(!this.events[event]){
            this.events[event]=[];  //create array for new events
        }

        this.events[event].push(callback);//Add the callback function to the event array
    }


    //Method for emitting event
    emit(event, ...args){
        //Check is there are listners for event
        if(this.events[event]){
            this.events[event].forEach(callback=>callback(...args)); //Call each callback with the provided arguments
        }
    }
}