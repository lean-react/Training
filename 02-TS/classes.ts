
class Konto {

    private _stand: number;

    constructor(public nr: number) {
        this._stand = 0;
    }
}

const k1: Konto = new Konto(2000);

class GiroKonto extends Konto {
    constructor(nr: number) {
        super(nr);
    }
    
}
