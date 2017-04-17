var TimeListener = require('../generated/TimeListener');

// This class defines a complete listener for a parse tree produced by TimeParser.
function TaskBuilder() {
	TimeListener.TimeListener.call(this);
	this.task = {};
	return this;
}

TaskBuilder.prototype = Object.create(TimeListener.TimeListener.prototype);
TaskBuilder.prototype.constructor = TaskBuilder;

// Enter a parse tree produced by TimeParser#times.
TaskBuilder.prototype.enterTimes = function(ctx) {
  console.log( "Initializing a times array" );
};

// Exit a parse tree produced by TimeParser#times.
TaskBuilder.prototype.exitTimes = function(ctx) {
  console.log( "Returing a times array" );
};


// Enter a parse tree produced by TimeParser#time.
TaskBuilder.prototype.enterTime = function(ctx) {
  console.log( "Initializing a time" );
};

// Exit a parse tree produced by TimeParser#time.
TaskBuilder.prototype.exitTime = function(ctx) {
  console.log( "Returning a time" );
};


// Enter a parse tree produced by TimeParser#absoluteTime.
TaskBuilder.prototype.enterAbsoluteTime = function(ctx) {
  console.log( "Initializing an absoluteTime" );
  debugger;
  console.log( "  " + ctx.getText() );
};

// Exit a parse tree produced by TimeParser#absoluteTime.
TaskBuilder.prototype.exitAbsoluteTime = function(ctx) {
  console.log( "Returning an absoluteTime" );
};

// Enter a parse tree produced by TimeParser#hour.
TaskBuilder.prototype.enterHour = function(ctx) {
  console.log( "Entering hour" );
};

// Exit a parse tree produced by TimeParser#hour.
TaskBuilder.prototype.exitHour = function(ctx) {
  console.log( "Exiting hour" );
};


// Enter a parse tree produced by TimeParser#minute.
TaskBuilder.prototype.enterMinute = function(ctx) {
  console.log( "Entering minute" );
};

// Exit a parse tree produced by TimeParser#minute.
TaskBuilder.prototype.exitMinute = function(ctx) {
  console.log( "Exiting minute" );
};


// Enter a parse tree produced by TimeParser#ampm.
TaskBuilder.prototype.enterAmpm = function(ctx) {
  console.log( "Entering ampm" );
};

// Exit a parse tree produced by TimeParser#ampm.
TaskBuilder.prototype.exitAmpm = function(ctx) {
  console.log( "Exiting ampm" );
};

exports.TaskBuilder = TaskBuilder;
