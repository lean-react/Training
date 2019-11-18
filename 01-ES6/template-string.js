const einDomString = `
    <div>
        <h1>Demo</h1>
    </div>
`;

const name = 'Micha';
const greeting = `Hallo ${name}`;
const alter = 47;

function jsx(...args) {
    console.log(args);
}

jsx(18,20);
jsx `Hallo ${name}, das ist ${alter} eine Begrüßung`;


