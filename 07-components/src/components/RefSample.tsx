import React from 'react';

export default class RefSample extends React.Component<{}, { editMode: boolean }> {

    // inputRef = React.createRef<HTMLInputElement>();
    inputRef: HTMLInputElement | undefined | null;

    state = { editMode: false };
    changeEditMode() {
        this.setState( { editMode: true} );
    };

    componentDidUpdate() {
        console.log(this.inputRef);
        // this.inputRef.current && this.inputRef.current.focus();
        this.inputRef && this.inputRef.focus();
    }

    render() {
        return (
            <div>
                { this.state.editMode ? 
                    // <input ref={this.inputRef} type="text"></input>
                    <input ref={(elt) => this.inputRef = elt } type="text"></input>
                  : <span onDoubleClick={() => this.changeEditMode()}>Doppelclick to Edit</span>  
                }
            </div>
        );
    }
}