class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "";
  }

  start() {
    let timerId = setInterval(() => {
      update();
    }, 1000);
   }
  stop() {
    clearTimeout(timerId);
   }
  update() {
    log();
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if (this.floor < this.MAXFLOOR){
      this.floor++; 
      this.direction = "up";     
    }
   }
  floorDown() { 
    if(this.floor > 0){
      this.floor--;
      this.direction = "down";
    }
  }
  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
