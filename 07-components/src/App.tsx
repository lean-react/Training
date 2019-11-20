import React from 'react';
import './App.css';

import KlassenKomp from './components/KlassenKomponente';
import FunkKomp from './components/FunktionsKomponente';
import StatefullComp from './components/StateFulComponent';
import Dialog from './components/Dialog';
import RefSample from './components/RefSample';

React.createElement(FunkKomp, { msg: 'ok' });
const msg = 'Yep';

class App extends React.Component {

  sampleRef = React.createRef<RefSample>();

  render() {
    console.log('App rendering');
    return (
      <>
        <h1>React Components</h1>
        <KlassenKomp msg={msg}></KlassenKomp>
        <FunkKomp msg={msg}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores doloremque, ipsam laboriosam ad nesciunt cum aut delectus quam possimus consectetur nemo molestias nam? Natus aut omnis magnam dicta officiis.</p>
          <p>Soluta at impedit culpa dolores recusandae qui perspiciatis voluptatum eos, sequi dicta tenetur voluptas suscipit veniam laborum corrupti quod minus, maiores dolore architecto totam necessitatibus! Inventore in quis laboriosam accusamus.</p>
          <p>Nostrum quasi aspernatur quis deleniti excepturi voluptatibus sequi pariatur tempore, doloribus, maiores dignissimos ex delectus veniam sunt dicta, explicabo nulla. Vitae tenetur, quis eos quibusdam saepe corporis sit iste consectetur?</p>
        </FunkKomp>
        <StatefullComp msg="Hooray"></StatefullComp>
        { React.createElement(Dialog, { title: 'Beispiel 1'}, 'Inhalt')}
        <Dialog title="Beispiel 2">
          <p>Das ist der Inhalt</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam perferendis, amet tempora fugiat quis laborum alias eius fugit! Quae deserunt ea rem similique consectetur tenetur atque consequuntur autem, distinctio quisquam!</p>
          <p>Itaque odio officiis dignissimos doloribus, delectus incidunt, unde sequi molestias illo a maxime tenetur quod! Assumenda laudantium, numquam, praesentium cum rerum maxime debitis nulla quos odit autem molestias nisi corporis.</p>
        </Dialog>
        <RefSample ref={this.sampleRef} /> 
        <button onClick={() => {this.sampleRef.current && this.sampleRef.current.changeEditMode()}}>Edit</button>
        <RefSample />
        <RefSample />
      </>
    );
  }
};

export default App;
