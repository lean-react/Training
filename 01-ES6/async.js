function add(a,b,cb) {
    setTimeout(() => {
        cb(a+b);
    }, 3000);
    
}

add(17,4, function (erg) {
    add(erg, 25, function (endergebnis) {
        console.log(endergebnis);
    })
});

// Promise-API
function addP(a,b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 3000);
    });
}

addP(3,5)
    .then(erg => { console.log(erg) });


fetch('https://api.exchangeratesapi.io/latest')
    .then((resp) => resp.json())
    .then((data) => { console.log(data); })

async function getRates() {
    const response = await fetch('https://api.exchangeratesapi.io/latest')
    return await response.json();
}

async function printData() {
    const data = await getRates(); 
    console.log(data);
}

async function addS(a,b) { return a+b; }
function addS2(a,b) { return Promise.resolve(a+b)};
