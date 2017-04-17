var chai = require('chai');
var expect = chai.expect;
var TaskProcessor = require('../../lib/task_processor');

describe( 'a TaskProcessor', function() {
  beforeEach( function() {
    processor = new TaskProcessor.TaskProcessor();
  } );


  describe( 'when processing a simple time', function() {
    beforeEach( function() {
      result = processor.processTask( '5pm' );
    } );

    it( 'returns an object', function() {
      expect( result ).to.deep.equal( {} );
    } );
  } );


} );
