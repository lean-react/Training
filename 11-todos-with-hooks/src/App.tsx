import React from 'react';
import TodoShell from './components/TodoShell';

const App: React.FC = () => {
  return (
    <>
      <TodoShell />
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://lean-stack.de">Micha Alt</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  );
}

export default App;
