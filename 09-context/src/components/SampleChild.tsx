import React from 'react';
import { MotDContext } from './FeatureShell';

export default class SampleChild extends React.Component {

  render() {
  return (
    <MotDContext.Consumer>
        { motd =>  
            <div>
                <p>Child works.</p>
                { motd && <p>MOTD: { motd.msg }</p> }
            </div>
         }
    </MotDContext.Consumer>
   
)
}
}