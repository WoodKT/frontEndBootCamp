import React from "react";
import { NewKidForm } from "./NewKidForm.js";

export const Daycare = (props) => {
    const {daycare, updateDaycare} = props;

    const deleteKid = (kidId) => {
        const updatedDaycare = {
            ...daycare,
            kids: daycare.kids.filter((x) => x._id !== kidId)
        };
        updateDaycare(updatedDaycare);
    }

    const addNewKid = (kid) => updateDaycare({...daycare, kids: [...daycare.kids, kid]})
 
    const kids = () => (
        <ul>
            {daycare.kids.map((kid, index) => ( //error?
                <li key={index}>
                    <label>{`${kid.name} Dob: ${kid.dob}`}</label>&nbsp;
                    <button onClick={(e) => deleteKid(kid._id)}>Delete Kid</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{daycare.name}</h1>
            {
                kids({kids, daycareId: daycare._id, deleteKid})
            }
            <NewKidForm addNewKid={addNewKid} />
        </div>
    ); 
};