import React from 'react';

function String (props) {
    console.log(props.text);
    return (
        <div id="string">
           You Played: {props.text}
        </div>
    )
}

export default String;