var antlr4      = require('antlr4/index'),
    TimeLexer   = require('../generated/TimeLexer'),
    TimeParser  = require('../generated/TimeParser'),
    TaskBuilder = require('./task_builder');

function TaskProcessor() {
  return this;
}

TaskProcessor.prototype.constructor = TaskProcessor;

TaskProcessor.prototype.processTask = function( input ) {
  var chars   = new antlr4.InputStream( input ),
      lexer   = new TimeLexer.TimeLexer( chars ),
      tokens  = new antlr4.CommonTokenStream( lexer ),
      parser  = new TimeParser.TimeParser( tokens ),
      builder = new TaskBuilder.TaskBuilder(),
      walker  = antlr4.tree.ParseTreeWalker.DEFAULT,
      tree    = parser.times();
  walker.walk( builder, tree );
  return builder.times;
}

exports.TaskProcessor = TaskProcessor;
