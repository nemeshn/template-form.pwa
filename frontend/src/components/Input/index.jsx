import React from 'react'

export default function Input(props) {
    const styles = {
        borderColor: props.valueInvalid ? '#d50000' : '#cccccc',
        backgroundColor: props.valueInvalid ? '#ffcdd2' : '#ffffff'
    };

    let property = Object.assign({}, props);
    delete property.valueInvalid;

    return (
        <input
            type='text'
            style= {styles}
            {...property}
            // id= {props.id}
            // placeholder= {props.placeholder}
            // maxLength= {props.maxLength}
        />
    );
}