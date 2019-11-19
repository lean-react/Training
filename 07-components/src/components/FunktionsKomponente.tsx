import React from 'react';

const FunkKomp: React.FC<{ msg: string}> = (props) => <p>Funktions-Komponente Works, {props.msg}</p>;
/*
const FunkKomp2 = function() {
    return (
        <p>Lang-Fassung</p>
    );
};

const FunkKomp3: React.FunctionComponent<{ msg: string}> = (props) => <p>Funktions-Komponente Works {props.msg }</p>;
*/
export default FunkKomp;