import React from 'react';
import Header from './Header';
import NewUser from './NewUser';
import { Toast } from './Toast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <NewUser />
        <Toast />
      </div>
    );
  }
}

export default App;
