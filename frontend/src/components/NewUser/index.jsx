import React from 'react'

import Label from '../Label'

class NewUser extends React.Component {
    render(){
        return(
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label htmlFor ='name' text ='Baka, Who are you? xD' valueInvalid />
                </form>
            </div>
        );
    }
}

export default NewUser;