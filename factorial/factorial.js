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

    // Using .be.a('type')
    it('should return a number for input 5', function() {
        const result = factorial_recursive(5);
        expect(result).to.be.a('number');
    });

    // Using .not.equal
    it('should not return 100 for input 5', function() {
        const result = factorial_recursive(5);
        expect(result).to.not.equal(100);
    });

    // Using .above
    it('should return a result above 100 for input 5', function() {
        const result = factorial_recursive(5);
        expect(result).to.be.above(100);
    });

    // Using .below
    it('should return a result below 200 for input 5', function() {
        const result = factorial_recursive(5);
        expect(result).to.be.below(200);
    });
});