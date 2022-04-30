const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HouseApi {
    get = async () => {
        try{
        const resp = await fetch(HOUSES_ENDPOINT);
        const data = await resp.json();
        return data;
        } catch(e) {
            console.log('fetchHouses error', e);
        }
    }

    pub = async (house) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
        });
        return await resp.json();
        } catch(e) {
            console.log('updating houses error', e);
        }
    }
}

export const HouseApi = new HouseApi();