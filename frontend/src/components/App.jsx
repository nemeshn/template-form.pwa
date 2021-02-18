import React from 'react';
import Header from './Header';
import NewUser from './NewUser';
import { Toast, sucessMSG } from './Toast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <NewUser
          onSubmitButton={(user) => {
            const genero = user.genero === 'm' ? 'o' : 'a';
            sucessMSG(
              `Seja bem-vind${genero} ${user.name}!`,
            );
          }}
        />
        <Toast />
      </div>
    );
  }
}

export default App;
