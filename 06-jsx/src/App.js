import React from 'react';

const title = 'JSX Demo';
const homeLink = '/home';
const linkKlasse = 'link';

const heading = <h2>A Heading</h2>;

const style = {
    fontFamily: 'sans-serif'
}

export default class App extends React.Component {

    render() {
        return <header style={style}>
            <h1>{title}</h1>
            { heading }
            <nav>
                <ul>
                    <li><a className={linkKlasse} tabIndex={2} href={homeLink}>Home</a></li>
                    <li><a className="link" href="/about">Über</a></li>
                </ul>
            </nav>
            <p>Der Seitentitwel lautet { title }.</p>
        </header>;
    }
}
