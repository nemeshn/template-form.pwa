import React from 'react'

export default function Label(props) {
    const styles = {
        color: props.valueInvalid ? '#d50000' : '#444444'
    };

    return (
        <label
            style = {styles}
            htmlFor = {props.htmlFor} >
            {props.text}
        </label>
    );
}