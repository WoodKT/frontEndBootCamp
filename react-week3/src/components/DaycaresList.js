import React from 'react';
import { Daycare } from './Daycare.js'; 
import { daycaresApi } from '../rest/DaycaresApi.js';

export class DaycaresList extends React.Component {
    state = {
        daycares: []
    };

    componentDidMount() {
        this.fetchDaycares();
    };

    fetchDaycares = async () => {
        const daycares = await daycaresApi.get();
        this.setState({ daycares });
    };

    updateDaycare = async (updatedDaycare) => {
        await daycaresApi.put(updatedDaycare);
        this.fetchDaycares();
    };

    render() {
        return (
            <div className='daycare-list'> 
                {this.state.daycares.map((daycare) => (
                    <Daycare 
                        daycare={daycare}
                        key={daycare._id}
                        updateDaycare={this.updateDaycare}
                    />
                ))}
            </div>
        ) 
    }
}