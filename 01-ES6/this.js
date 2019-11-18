
function printThis() {
    console.log(this);
}

// this === window
printThis();     // globaler Kontext

const obj = {
    printThis: printThis
}
// this === obj
obj.printThis(); // Methoden-Kontext

const h1Elt = document.querySelector('h1');
// this === h1Elt
h1Elt.addEventListener('click', printThis); // Event-Handler

h1Elt.addEventListener('click', function () {
    this.style.backgroundColor = '#ddd';
    // const that = this;
    // setTimeout(function () {
    //     that.style.backgroundColor = '#fff';
    // }, 3000);
    // setTimeout((function () {
    //     this.style.backgroundColor = '#fff';
    // }).bind(this), 3000);
    setTimeout(() => {
        this.style.backgroundColor = '#fff';
    }, 3000);
});

// Call/Apply/Bind
function add(a,b) { return a+b};
console.log(add(17,4));
console.log(add.call('Huhu', 17,4));
console.log(add.apply(null, [21, 23]));
const addTo5 = add.bind(null, 5); // Currying,  Schönfinkeln
console.log(addTo5(17));

var plus = (a,b) => { return a+b; };
var minus = (a,b) => a -b;
var quadrat = a => a * a;
const sayHello = () => { console.log('hello'); };

var buildObj = (x,y) => ({ x: x, y: y });

const pThis = () => console.log(this);

// const demo = () => <h1>Hurra</h1>;
