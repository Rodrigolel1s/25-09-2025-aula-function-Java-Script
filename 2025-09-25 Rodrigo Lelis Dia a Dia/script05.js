// arrow function: Defini-se function() => ()

    // function tradicional
    function soma1(a, b) {
        return a + b
    }
    console.log(soma1(2, 3));

    // arrow function
    var soma2 = (a, b) => {
        return a + b;
    }
    console.log(soma2(2, 3));

    // arrow function com retorno implicito
    var soma3 = (a, b) => a + b;
    console.log(soma3(2, 3)); 