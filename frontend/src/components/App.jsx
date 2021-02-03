import React from 'react';
import Header from './Header';
import NewUser from './NewUser';

// React.Component
class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <NewUser />
      </div>
    );
  }
}

export default App;
