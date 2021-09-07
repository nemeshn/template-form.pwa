/* eslint-disable object-shorthand */
import React from 'react';
import Header from './Header';
import NewUser from './NewUser';
import { Toast, sucessMSG, errorMSG } from './Toast';
import Users from '../models/Users';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sucessMSG = sucessMSG;
    this.errorMSG = errorMSG;
    Users.acquire((user) => {
      this.state = {
        // eslint-disable-next-line react/no-unused-state
        user: user,
      };
    }, () => {
      this.state = {
        // eslint-disable-next-line react/no-unused-state
        user: undefined,
      };
    });
  }

  mgNewUser(newUser) {
    const genero = newUser.genero === 'm' ? 'o' : 'a';
    this.sucessMSG(
      `Seja bem-vind${genero} ${newUser.name}!`,
    );
  }

  renderNewUser() {
    const { user } = this.state;

    if (user) {
      return (
        <div style={{ marginTop: '140px', textAlign: 'center' }}>
          <b>
            Usuário obtido do
            {' '}
            <i>localStorage</i>
          </b>
          <br />
          {user.toString()}
        </div>
      );
    }
    return (
      <div>
        <Header />
        <NewUser
          onSubmitButton={(insertUser) => {
            insertUser.save(() => {
              this.setState({
                // eslint-disable-next-line react/no-unused-state
                user: insertUser,
              }, () => this.mgNewUser(insertUser));
            });
          }}
          resErrorMSG={(mg) => this.errorMSG(mg)}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderNewUser()}
        <Toast />
      </div>
    );
  }
}

export default App;
