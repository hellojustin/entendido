var chai         = require('chai'),
    expect       = chai.expect,
    antlr4       = require('antlr4/index'),
    TaskLexer    = require('../../generated/TaskLexer'),
    TaskParser   = require('../../generated/TaskParser'),
    TimeListener = require('../../lib/entendido_time_listener');

function parseInputWithListener( input ) {
  var chars    = new antlr4.InputStream( input ),
      lexer    = new TaskLexer.TaskLexer( chars ),
      tokens   = new antlr4.CommonTokenStream( lexer ),
      parser   = new TaskParser.TaskParser( tokens ),
      listener = new TimeListener.EntendidoTimeListener(),
      walker   = antlr4.tree.ParseTreeWalker.DEFAULT,
      tree     = parser.time();
  walker.walk( listener, tree );
  return listener.time;
};

describe( 'an instance of EntendidoTimeListener', function() {
  var result;

  describe( 'when used to parse an absolute time', function() {

    describe( 'expressed as "5:15pm"', function() {
      beforeEach( function() {
        result = parseInputWithListener( '5:15pm' );
      } );

      it( 'determines that the hour is 17', function() {
        expect( result.hour ).to.equal( 17 );
      } );
      it( 'determines that the minute is 0', function() {
        expect( result.minute ).to.equal( 15 );
      } );
    } );

    describe( 'expressed as "18:30"', function() {
      beforeEach( function() {
        result = parseInputWithListener( '18:30' );
      } );

      it( 'determines that the hour is 18', function() {
        expect( result.hour ).to.equal( 18 );
      } );
      it( 'determines that the minute is 30', function() {
        expect( result.minute ).to.equal( 30 );
      } );
    } )

    describe( 'expressed as 4:32', function() {
      beforeEach( function() {
        result = parseInputWithListener( '4:32' );
      } );

      it( 'determines that the hour is 4', function() {
        expect( result.hour ).to.equal( 4 );
      } );
      it( 'determines that the minute is 32', function() {
        expect( result.minute ).to.equal( 32 );
      } );
    } );

    describe( 'expressed as 7PM', function() {
      beforeEach( function() {
        result = parseInputWithListener( '7PM' );
      } );

      it( 'determines that the hour is 19', function() {
        expect( result.hour ).to.equal( 19 );
      } );
      it( 'determines that the minute is 0', function() {
        expect( result.minute ).to.equal( 0 );
      } );
    } );

  } );

} );
