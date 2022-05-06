const DAYCARES_ENDPOINT = 'https://crudcrud.com/api/9a10df0bcdc24f3b862f1e5f20a61ada';

class DaycaresApi {
    get = async () => {
        try {
            const resp = await fetch(DAYCARES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("fetchDaycares error.", e);
        }
        
    }

    put = async (daycare) => {
        try {
            const resp = await fetch(`${DAYCARES_ENDPOINT}/${daycare._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(daycare)
            });
            return await resp.json();
        } catch(e) {
            console.log("error updating daycare", e);
        }
    }
}

export const daycaresApi = new DaycaresApi();