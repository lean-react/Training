// Klasse: KontoLegacy (ES5)
function KontoLegacy(nr) {
    this.nr = nr;
    this.stand = 0;
}
KontoLegacy.prototype.einzahlen = function (betrag ) { this.stand += betrag; };

const k1 = new KontoLegacy();
k1.einzahlen(500);

// Klasse ES 6
class Konto {
    constructor(nr) {
        this.nr = nr;
        this.stand = 0;
    }
    einzahlen(betrag) {
        this.stand += betrag;
    }
}
class GiroKonto extends Konto {
    constructor(nr) {
        super(nr);
    }
    einzahlen(betrag) {
        super.einzahlen(betrag);
    }
}