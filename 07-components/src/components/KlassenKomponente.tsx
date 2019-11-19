import React from 'react';

type KlassenProps = {msg: string};

export default class KlassenKomp extends React.Component<KlassenProps> {

    constructor(props: KlassenProps) {
        super(props);
        console.log('Komponte erzeugt');
    }

    render() {
        console.log('KlassenComp rendering');
        return <p>Klassen Komponente Works! {this.props.msg}</p>;
    }
}