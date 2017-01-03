'use strict';

const chai = require('chai');
const greet = require ('../lib/greet.js');

const expect = chai.expect;

describe ('testing module greet.js', function(){
  it('should return "hello world"', function(){
    expect(greet('world')).to.equal('Hello, world');
  });
  it ('should return null if value is not a string', function(){
    expect(greet()).to.be.a('string');

  })
})