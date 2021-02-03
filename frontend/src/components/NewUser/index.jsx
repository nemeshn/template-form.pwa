import React from 'react';
import Label from '../Label';
import Input from '../Input';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
      },
      validation: {
        nameInvalid: false,
      },
    };
    this.updateName = this.updateName.bind(this);
  }

  updateName(e) {
    const { user } = this.state;
    user.name = e.target.value;
    this.setState({
      user,
    });
  }

  render() {
    const { validation, user } = this.state;
    return (
      <div className="center">
        <form className="pure.css pure-form pure-form-stacked">
          <Label
            htmlFor="name"
            text="Baka, você é fã de anime? xD"
            valueInvalid={validation.nameInvalid}
          />
          <Input
            id="name"
            placeholder="Mas quem seria você, diga seu nome..."
            maxLength="40"
            readOnly={false}
            valueInvalid={validation.nameInvalid}
            defaultValue={user.name}
            onChange={this.updateName}
          />
        </form>
      </div>
    );
  }
}

export default NewUser;
