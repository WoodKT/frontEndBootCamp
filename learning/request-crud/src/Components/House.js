import { render } from "@testing-library/react";
import React from "react";
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {

        }
    }
}

class NameForm extends ReactComponent {
    this.state = {value:''};

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('a name was entered: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name:
                    <input type="text" value={this.state.value}
                    onChange={this.handleChange.bind(this)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}