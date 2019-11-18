// IIFE - Immediatly invoked Function Expression
(function (){
    'use strict';

    console.log('IIFE');
    var demoLokal = 42;

    if (true) {
        var keinScope = 17;
    }
    console.log(keinScope);

    // ES 6: lexikalischer Scope
    const zahlen = [];
    let ix = 0;
    const user = {};

    if(true) {
        const blockScope = 100;
    }
    // console.log(blockScope); // Error
    
})();