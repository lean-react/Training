

function sum1() {
    let summe = 0;
    for(let ix =0; ix < arguments.length; ++ix) {
        summe += arguments[ix];
    }
    return summe;
}

function sum2() {
    let summe = 0;
    Array.prototype.forEach.call(arguments, function(elt) {
        summe += elt;
    });
    return summe;
}

function sum3() {
    let summe = 0;
    var argumente = Array.prototype.slice.call(arguments);
    argumente.forEach(function(elt) {
        summe += elt;
    });
    return summe;
}

function sum3() {
    let summe = 0;
    var argumente = Array.prototype.slice.call(arguments);
    argumente.forEach(function(elt) {
        summe += elt;
    });
    return summe;
}

// Rest-Operator
function sum(...args) {
    return args.reduce( (summe, elt) => summe + elt , 0);
}

const zahlen = [1,3,5,6,8,10];

// Spread Operator
sum(...zahlen);

const zahlenImmutableChanged = [ ...zahlen, 45 ];
const arrayClone = [ ...zahlen ];

const demo = {
    a: 17,
    b: 4
}

const demoClone = { ...demo };
const demoImmutableChange = { ...demo, b: 21 };

// Destructuring
const { vorname, nachname } = { vorname: 'Micha', nachname: 'Alt' };
const [ erster, zweiter, , vierter ] = [ 11, 22, 33, 44 ];

function destructuringArgs( { min, max }) {
    for(let ix = min; ix < max; ++ix) {
        console.log(ix);
    }
}

destructuringArgs({ min: 1, max: 5, msg: 'Hello'});

const pause = 'Mittag';
const training = 'React';

const daten = { pause, training };

