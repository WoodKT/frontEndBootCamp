import React from 'react';
import { Daycare } from './Daycare.js'; 
import { daycaresApi } from '../rest/DaycaresApi.js';

export class DaycaresList extends React.Component {
    state = {
        daycares: []
    };
//    constructor(props) { // https://medium.com/edonec/state-in-react-an-overview-a182675cee2c
//        super(props);
//        this.state = {
            // daycares: [ {
            //     daycareName: "Spirit",
            //     daycareId: daycare._id //needs work
            // },
            // {
            //     daycareName: "A Little Princess",
            //     daycareId: daycare._id //needs work
            // }]
//        };
//    };

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