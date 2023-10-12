const chai = require('chai');
const expect = chai.expect;

function factorial(a) {
    const intInput = parseInt(a);
    if (Number.isInteger(intInput)) {
        if (intInput >= 0) {
            let fac = 1;
            for (let i = 1; i <= intInput; i++) {
                fac = fac * i;
            }
            return fac;
        } else {
            return 'Number is lower than 0';
        }
    } else {
        return 'Not an integer number';
    }
}

// module.exports = factorial;
//
// Recursive way
//
function factorial_recursive(a) {
    const intInput = parseInt(a);

    function calculateFactorial(n) {
        if (n === 0) {
            return 1;
        } else if (n < 0) {
            return 'Number is lower than 0';
        } else {
            return n * calculateFactorial(n - 1);
        }
    }

    if (Number.isInteger(intInput)) {
        return calculateFactorial(intInput);
    } else {
        return 'Not an integer number';
    }
}

// console.log(factorial_recursive(5))

describe('factorial_recursive', function() {
    it('should return 120 for input 5', function() {
        const result = factorial_recursive(5);
        expect(result).to.equal(120);
    });

    it('should return 1 for input 0', function() {
        const result = factorial_recursive(0);
        expect(result).to.equal(1);
    });

    it('should return "Number is lower than 0" for negative input', function() {
        const result = factorial_recursive(-5);
        expect(result).to.equal('Number is lower than 0');
    });

    it('should return "Not an integer number" for non-integer input', function() {
        const result = factorial_recursive('abc');
        expect(result).to.equal('Not an integer number');
    });
});