import React from 'react';
import Label from '../Label';
import Input from '../Input';
import GEDSelector from '../GEDSelector';
import Users from '../../models/Users';
import Button from '../Button';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new Users(),
      validation: {
        nameInvalid: false,
        generoInvalid: false,
      },
    };
    this.updateName = this.updateName.bind(this);
    this.updateGenero = this.updateGenero.bind(this);
    this.validateButton = this.validateButton.bind(this);
  }

  updateName(e) {
    const { user } = this.state;
    user.name = e.target.value;
    this.setState({ user });
  }

  updateGenero(event, genero) {
    event.preventDefault();
    const { user } = this.state;
    user.genero = genero;
    this.setState({ user });
  }

  validateButton(event) {
    event.preventDefault();
    const { validation, user } = this.state;
    validation.nameInvalid = !user.validateName();
    validation.generoInvalid = !user.validateGenero();
    this.setState({ validation });
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
          <Label htmlFor="#!" text="Seu gênero:" valueInvalid={validation.generoInvalid} />
          <GEDSelector
            valueInvalid={validation.generoInvalid}
            genero={user.genero}
            updateGenero={this.updateGenero}
          />
          <Button
            main
            text="Próximo"
            onClickButton={this.validateButton}
          />
        </form>
      </div>
    );
  }
}

export default NewUser;
