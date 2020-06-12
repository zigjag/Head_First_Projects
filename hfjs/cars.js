var cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
  started: false,
  start: function(){
    this.started = true;
  },
  stop: function(){
    this.started = false;
  },
  drive: function(){
    if (this.started) {
      alert(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.")
    }
  }
};

var chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  started: false,
  start: function(){
    this.started = true;
  },
  stop: function(){
    this.started = false;
  },
  drive: function(){
    if (this.started) {
      alert(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.")
    }
  }
};

var taxi = {
  make: "Webville Motor",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  start: function(){
    this.started = true;
  },
  stop: function(){
    this.started = false;
  },
  drive: function(){
    if (this.started) {
      alert(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.")
    }
  }
};

var fiat = {
  make: "Fiat",
  model: "500",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  fuel: 0,
  start: function(){
    if(this.fuel > 0){
      this.started = true;
    } else {
      alert("Cannot be started because there is no fuel.")
    }
  },
  stop: function(){
    this.started = false;
  },
  drive: function(){
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel -1;
      } else {
        alert("Uh oh, out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function(amount){
    this.fuel = this.fuel + amount;
  }
};
