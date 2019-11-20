import React from 'react';
import SampleContainer from './SampleContainer';

type MotDCtx =
      { msg: string}
    | null;

export const MotDContext = React.createContext<MotDCtx>({ msg: 'Zeit für Kaffee' });

export default class FeatureShell extends React.Component {

    render() {
        return (
            <MotDContext.Provider value={ {msg: 'Reicht für Context-API'} }>
                <div>
                    <h1>Shell</h1>
                    <hr/>
                    <SampleContainer />
                </div>
            </MotDContext.Provider>
            
        )
    }
}