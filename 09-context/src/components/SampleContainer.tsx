import React from 'react';
import SampleChild from './SampleChild';
import { MotDContext } from './FeatureShell';

export default class SampleContainer extends React.Component {

    render() {
        return (
            <div>
                <h2>Container</h2>
                <hr/>
        <strong>{ this.context.msg }</strong>
                <SampleChild />
            </div>
        )
    }
}
//SampleContainer.contextType = MotDContext;