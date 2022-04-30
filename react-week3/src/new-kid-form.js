import React from "react";

export default class NewKidForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            dobValue: ''
        } 

        this.handleNameChange = this.handleNameChange.bind(this); 
        this.handleDobChange = this.handleDobChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handleDobChange(e) {
        this.setState({dobValue : e.target.value});
    }

    handleClick(e) {
        this.props.addNewKid(e, this.props.data,
            {name: this.state.nameValue, dob: this.state.dobValue});
        this.setState({nameValue: '', dobValue: ''});
    } 

    render() {
        return (
            <div>
                <input type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.nameValue} />
                <input type="text" placeholder="Dob" onChange={this.handleDobChange} value={this.state.dobValue} />
                <button onClick={this.handleClick}>Add New Kid</button>
            </div>
        ) 
    }
}