import React from 'react';

export default class ReplyButton extends React.Component {
    render() {
        return React.createElement('button', {class: 'btn btn-primary'}, 'Reply');
    }
}