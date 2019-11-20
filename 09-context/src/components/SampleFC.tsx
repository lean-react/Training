import React, { useContext } from 'react';
import { MotDContext } from './FeatureShell';

const SampleFC = () => {

    const motd = useContext(MotDContext);

    return (
        <div>
            <h3>{ motd && motd.msg }</h3>
        </div>
    );
}