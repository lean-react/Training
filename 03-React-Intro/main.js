
class LikeMe extends React.Component {

    demo = 17;

    constructor(props) {
        super(props);
        this.state = { liked: false, msg: 'Hello' }
    }

    render() {
        return this.state.liked ?
            React.createElement('span', {}, this.props.greeting) :
            React.createElement('div', { className: 'demo' }, 
                React.createElement('button', { onClick: () => { this.setState({ liked: true })} }, 'Like me!'),
                React.createElement('span', {}, 'Bitte, bitte, ...')
            )
            ;
    }
}

const appElt = document.getElementById('like-button');
ReactDOM.render(React.createElement(LikeMe, { greeting: 'Thanky you for liking me!'}), appElt);