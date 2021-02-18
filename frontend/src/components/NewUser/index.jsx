/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import Input from '../Input';
import GEDSelector from '../GEDSelector';
import Button from '../Button';
import { errorMSG } from '../Toast';
import ImageScroller from '../ImageScroller';

import Users from '../../models/Users';
import Avatar from '../../models/Avatar';

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new Users(),
      validation: {
        nameInvalid: false,
        generoInvalid: false,
      },
      pStagefull: false,
    };
    this.updateName = this.updateName.bind(this);
    this.updateGenero = this.updateGenero.bind(this);
    this.validateButton = this.validateButton.bind(this);
    // this.avatar = Avatar.acquireAll()[0];
  }

  updateName(event) {
    const { user } = this.state;
    user.name = event.target.value;
    this.setState({ user });
  }

  updateGenero(event, genero) {
    event.preventDefault();
    const { user } = this.state;
    user.genero = genero;
    user.avatar = Avatar.acquireAll()[0];
    this.setState({ user });
  }

  validateButton(event) {
    event.preventDefault();
    let { pStagefull } = this.state;
    const { user, validation } = this.state;
    validation.nameInvalid = !user.validateName();
    validation.generoInvalid = !user.validateGenero();

    let message = '';
    pStagefull = false;
    if (validation.nameInvalid && validation.generoInvalid) {
      message = 'Os campos nome e gênero estão inválidos!';
    } else if (validation.nameInvalid) {
      message = 'Seu nome está inválido!';
    } else if (validation.generoInvalid) {
      message = 'Selecione seu gênero!';
    } else {
      pStagefull = true;
    }

    if (!pStagefull) {
      errorMSG(message);
    }

    this.setState({
      validation,
      pStagefull,
    });
  }

  renderName() {
    const { validation, user, pStagefull } = this.state;

    return (
      <section>
        <Label
          htmlFor="name"
          text="Baka, você é fã de anime? xD"
          valueInvalid={validation.nameInvalid}
        />
        <Input
          id="name"
          placeholder="Mas quem seria você, diga seu nome..."
          maxLength="40"
          readOnly={pStagefull}
          valueInvalid={validation.nameInvalid}
          defaultValue={user.name}
          onChange={this.updateName}
        />
      </section>
    );
  }

  renderGenero() {
    const { validation, user, pStagefull } = this.state;

    if (pStagefull) { return null; }

    return (
      <section>
        <Label htmlFor="#!" text="Seu gênero:" valueInvalid={validation.generoInvalid} />
        <GEDSelector
          valueInvalid={validation.generoInvalid}
          genero={user.genero}
          updateGenero={this.updateGenero}
        />
      </section>
    );
  }

  renderButtons() {
    const { onSubmitButton } = this.props;
    const { pStagefull, user } = this.state;

    if (pStagefull) {
      return (
        <section>
          <Button
            text="Voltar"
            onClickButton={(event) => {
              event.preventDefault();
              user.avatar = Avatar.acquireAll()[0];
              this.setState({
                user,
                pStagefull: false,
              });
            }}
          />
          <Button
            main
            text="Salvar"
            onClickButton={(event) => {
              event.preventDefault();
              onSubmitButton(user);
            }}
          />
        </section>
      );
    }
    return (
      <section>
        <Button
          main
          text="Próximo"
          onClickButton={this.validateButton}
        />
      </section>
    );
  }

  renderAvatar() {
    const { pStagefull, user } = this.state;

    if (pStagefull) {
      return (
        <section>
          <Label
            text="Escolha seu avatar:"
          />
          <ImageScroller
            file="img/avatars.png"
            axisY={(user.genero === 'm' ? 0 : 1)}
            elements={Avatar.acquireAll()}
            selected={user.avatar}
            onChangeButtonImg={(avatar) => {
              user.avatar = avatar;
              this.setState({
                user,
              });
            }}
          />
        </section>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="center">
        <form className="pure.css pure-form pure-form-stacked">
          {this.renderName()}
          {this.renderGenero()}
          {this.renderAvatar()}
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}
NewUser.propTypes = {
  onSubmitButton: PropTypes.func.isRequired,
};

export default NewUser;
