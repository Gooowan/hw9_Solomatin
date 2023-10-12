const chai = require('chai');
const expect = chai.expect;


// const multiply = (x) => {
//     let product = x;
//
//     const inner = (y) => {
//         product *= y;
//         return inner;
//     };
//
//     inner.valueOf = () => product;
//
//     return inner;
// };

function multiply(x) {
    let product = x;

    function inner(y) {
        product *= y;
        return inner;
    }

    inner.valueOf = function () {
        return product;
    };

    return inner;
}

console.log(multiply(2)(3)(10));         // Output: 60
console.log(multiply(-1)(677)(568)(2));  // Output: -769072
console.log(multiply(3));

describe('multiply', function() {
    it('should return 3 for 3', function() {
        const result = +multiply(3);
        expect(result).to.equal(3);
    });

    it('should return 6 for input (3)(2)', function() {
        const result = +multiply(3)(2);
        expect(result).to.equal(6);
    });

    it('should return 120 for input (3)(2)(5)(1)(4)', function() {
        const result = +multiply(3)(2)(5)(1)(4);
        expect(result).to.equal(120);
    });
});