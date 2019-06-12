import { DATA_REQUESTED, DATA_RECEIVED, DATA_REQUEST_FAILED } from '../consts';

export default function loadHotels() {
    return async function(dispatch) {
        dispatch({
            type: DATA_REQUESTED
        });

        return fetch('http://localhost:4000/hotels')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: DATA_RECEIVED,
                    payload: data
                });
            })
            .catch(() => {
                dispatch({
                    type: DATA_REQUEST_FAILED
                });
            });
    }
}
