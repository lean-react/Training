import React from 'react';

class App extends React.Component<{ msg: string }, { liked: boolean }> {

  state = { liked: false };


  render() {
    return this.state.liked ? <span>Thank you!</span> : (
      <div>
        <button onClick={() => this.setState({ liked: true })}>{ this.props.msg }</button>
      </div>
    )
  }

}

export default App;
