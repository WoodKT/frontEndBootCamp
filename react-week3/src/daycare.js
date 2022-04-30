import React from "react";
import NewKidForm from "./new-kid-form";

export default class Daycare extends React.Component {

    render() {
        const kids = this.props.data.kids
        ? this.props.data.kids.map((kid, index) => 
            <li key={index}>
                {kid.name} Dob: {kid.dob}
                <button onClick={e =>
                    this.props.deleteKid(e, this.props.data, kid)
                }>Delete</button>    
            </li>)
        : null;

        return (
            <div>
                <h1>{this.props.data.name}</h1> 
                <ul>
                    {kids}
                </ul>
                <NewKidForm 
                    addNewKid={this.props.addNewKid} data={this.props.data} />
            </div>
        );
    } 
}