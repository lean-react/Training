import React from 'react';
import './App.css';

import KlassenKomp from './components/KlassenKomponente';
import FunkKomp from './components/FunktionsKomponente';
import StatefullComp from './components/StateFulComponent';

React.createElement(FunkKomp, { msg: 'ok' });
const msg = 'Yep';

class App extends React.Component {

  

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
      </>
    );
  }
};

export default App;
