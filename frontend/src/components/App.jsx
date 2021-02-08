import React from 'react';
import Header from './Header';
import NewUser from './NewUser';
import Toast from './Toast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refToast = React.createRef();
  }

  render() {
    return (
      <div>
        <Header />
        <NewUser
          errorMSG={(msg) => this.refToast.toast.errorMSG(msg)}
        />
        <Toast
          ref={this.refToast}
        />
      </div>
    );
  }
}

export default App;
