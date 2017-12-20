const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// Unit tests for the 'fizzBuzzer' function
describe('fizzBuzzer', function() {

  // test the normal cases
  it('should return fizz for numbers divisible by 3 but not 5', function() {
    const multiplesOfThree = [3, 102, -3];
    multiplesOfThree.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz');
    });
  });

  it('should return buzz for numbers divisible by 5 but not 3', function() {
    const multiplesOfFive = [5, 20, -5];
    multiplesOfFive.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('buzz');
    })
  })

  it('should return fizz-buzz for numbers divisible by 15', function() {
    const multiplesOfFifteen = [15, 135, -15];
    multiplesOfFifteen.forEach(function(input) {
      const answer = fizzBuzzer(input);
      answer.should.equal('fizz-buzz');
    })
  })

  it('should return the arg number for numbers not divisible by 3 or 5', function() {
    const numsNotDivisible = [4, 101, -2];
    numsNotDivisible.forEach(function(input, index) {
      const answer = fizzBuzzer(input);
      answer.should.equal(numsNotDivisible[index]);
    })
  })

  it('should raise error if arg is not a number', function() {
    const badInputs = [true, 'fifteen', '3', {num: 3}, [10]];
    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });   
});