import React, { useState } from 'react';

export const NewKidForm = (props) => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState(undefined);

    const handleDobInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setDob(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && dob) {
            props.addNewKid({name, dob});
            setName('');
            setDob('');
        } else {
            console.log('Invalid input'); 
        }
    };

    return (
        <div>
            <h4>Add a new kid</h4>
             <form onSubmit={onSubmit}> 
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />&nbsp;
                <input
                    type='text'
                    placeholder='dob'
                    onChange={handleDobInput}
                    value={dob}
                />&nbsp;
                <button type='submit'>Add Kid</button> 
                <br />
            </form>
        </div>
    )
};