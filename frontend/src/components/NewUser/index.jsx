import React from 'react';
import Label from '../Label';
import Input from '../Input';

class NewUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: ''
            },
            validation: {
                nameInvalid: false
            }
        };
    }

    updateName(e) {
        let user = this.state.user;
        user.name = e.target.value;
        this.setState({
            user: user
        });
    }
      
    render() {
        return(
            <div className="center">
                <form className="pure.css pure-form pure-form-stacked">
                    <Label 
                       htmlFor= 'name' 
                       text= 'Baka, você é fã de anime? xD' 
                       valueInvalid= {this.state.nameInvalid}
                    />
                    <Input
                       id= "name"
                       placeholder= "Mas quem seria você, diga seu nome..." 
                       maxLength= "40"
                       readOnly= {false}
                       valueInvalid= {this.state.validation.nameInvalid}

                       defaultValue= {this.state.user.name}
                       onChange= {this.updateName.bind(this)}
                    />
                </form>
            </div>
        );
    }
}

export default NewUser;