var TaskListener = require('../generated/TaskListener');

// This class defines a complete listener for a parse tree produced by TimeParser.
function EntendidoTimeListener() {
	TaskListener.TaskListener.call(this);
	return this;
}

EntendidoTimeListener.prototype = Object.create(TaskListener.TaskListener.prototype);
EntendidoTimeListener.prototype.constructor = EntendidoTimeListener;

EntendidoTimeListener.prototype.enterTimes = function(ctx) {
	this.times = [];
  console.log( "Initializing a times array" );
};

EntendidoTimeListener.prototype.exitTimes = function(ctx) {
  this.times.push( this.time );
};

EntendidoTimeListener.prototype.enterTime = function(ctx) {
	this.time = this.time = { hour : 0, minute : 0 };
};

EntendidoTimeListener.prototype.exitTime = function(ctx) {
  var handlePm = this.time.ampm === 'pm' && this.time.hour <= 12,
	    hour     = handlePm ? 12 + this.time.hour : this.time.hour;
  this.time = { hour: hour, minute: this.time.minute };
};

EntendidoTimeListener.prototype.exitHour = function(ctx) {
	this.time.hour = parseInt(ctx.getText());
};

EntendidoTimeListener.prototype.exitMinute = function(ctx) {
	this.time.minute = parseInt(ctx.getText());
};

EntendidoTimeListener.prototype.exitAm = function(ctx) {
	this.time.ampm = 'am';
};

EntendidoTimeListener.prototype.exitPm = function(ctx) {
	this.time.ampm = 'pm';
};

exports.EntendidoTimeListener = EntendidoTimeListener;
