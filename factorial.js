function factorial(a) {
    let intInput = parseInt(a);
    if (Number.isInteger(intInput)) {
        if (intInput > 0) {
            let fac = 1;
            for (let i = 1; i <= intInput; i++) {
                fac = fac * i;
            }
            console.log(fac);
        }
        if (intInput < 0) {
            console.log("Number is lower than 0");
        }
    } else {
        console.log("Not an integer number");
    }
}

factorial(5);
factorial('5');
factorial('bla');
