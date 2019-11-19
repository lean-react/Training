import React from 'react';

export default class StatefulComp extends React.Component<{msg: string }, { count: number, label: string }> {

    state = { count: 0, label: 'Zähler' };

    /*
    constructor(props: {msg: string }) {
        super(props);
        // this.state = { count: 0 };  // s.o.


    }
    */

    render() {
        // console.log('Stateful rendering', this.state);
        return <p>{this.state.label}: {this.state.count}</p>
    }

    /* 
    componentWillMount() {
        console.log('Will mount');
    }

    componentWillReceiveProps() {
        console.log('Will receive props');
    }
      
    componentWillUpdate() {
        // console.log('Will update');
    }
    */

    componentDidMount() {
        console.log('did mount');
        
        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);

        setTimeout(() => {
            this.setState({ label: 'Ewiger Zähler' })
        }, 5000)
    }
    componentDidCatch() {
        console.log('did catch');
    }
    componentDidUpdate() {
        // console.log('did update');
    }
    componentWillUnmount() {
        console.log('Will unmount');
    }

}